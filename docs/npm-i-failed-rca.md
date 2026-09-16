# RCA: `npm i` fails with "Cannot read properties of null (reading 'edgesOut')"

## Summary

After the Angular 22 upgrade, running `npm i` on this project failed
immediately with:

```
npm error Cannot read properties of null (reading 'edgesOut')
```

This is not a problem with `package.json` or the Angular 22 upgrade itself.
It's a bug in npm's dependency resolver (`@npmcli/arborist`) that gets
triggered while resolving optional peer dependencies for `vitest` /
`@vitest/coverage-v8`.

## Environment

- npm 10.9.8
- Node v22.22.3 (via nvm)
- Windows 10

## Root cause

The debug log (`npm-cache/_logs/*-debug-0.log`) shows the crash happening
inside arborist's peer-dependency resolution, several levels deep in
recursive calls:

```
TypeError: Cannot read properties of null (reading 'edgesOut')
    at #loadPeerSet (.../@npmcli/arborist/lib/arborist/build-ideal-tree.js:1289:38)
    at async #loadPeerSet (...:1297:11)   x3 (recursive)
    at async #buildDepStep (...:904:11)
    at async Arborist.buildIdealTree (...:181:7)
```

It occurs while building the ideal tree for `node_modules/vitest`, right
after npm resolves `@vitest/coverage-v8@4.1.11`, which pulls in an optional
peer dependency chain (e.g. `@vitest/browser-playwright`). Arborist's
`#loadPeerSet` walks that peer set recursively and, in this case, hits a
node that has already been detached/replaced in the tree, so `node` is
`null` when it tries to read `node.edgesOut`.

This is a known upstream bug class in npm's arborist around circular /
optional peer-dependency sets — not something introduced by our
`package.json` changes. It reproduces with a plain `npm i` on this repo's
current `devDependencies` (`vitest ^4.0.8`, `@vitest/coverage-v8 ^4.0.8`)
against current registry versions, regardless of the Angular version.

## How it was confirmed

- `npm i` → fails with the error above every time.
- `npm i --legacy-peer-deps --dry-run` → resolves and plans the install
  successfully with no errors.
- `npm i --legacy-peer-deps` → installs successfully.

`--legacy-peer-deps` makes npm fall back to the older (pre-npm7) dependency
resolution algorithm, which does not build the same recursive "peer sets"
that the newer resolver does — so it never hits the buggy code path.

## Fix

Added a `.npmrc` file at the repo root:

```
legacy-peer-deps=true
```

This makes `legacy-peer-deps` the default for every `npm install` run in
this project (locally and in CI), and a plain `npm i` works again.

## Follow-up / things to watch

- This works around the bug rather than fixing it upstream. If a future
  npm release fixes the arborist peer-set resolution bug, it would be
  worth trying to remove `.npmrc` and confirm a plain `npm i` (without
  `legacy-peer-deps`) succeeds again.
- `legacy-peer-deps=true` means npm will no longer warn/fail on genuine
  peer dependency conflicts. Keep an eye on `npm ls` / build output for
  real peer mismatches that would otherwise have been surfaced.
