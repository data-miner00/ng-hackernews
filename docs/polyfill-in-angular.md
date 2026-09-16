# Polyfills in Angular

## What is a polyfill?

A polyfill is code that implements a feature on browsers/runtimes that don't
support it natively, so the rest of the application can rely on that feature
existing everywhere. The term comes from "Polyfilla", a UK brand of spackle
used to fill cracks in walls — the code "fills the gap" between what a
browser actually supports and what the application assumes is available.

A polyfill typically:

- Detects whether the native feature is missing (or patches it unconditionally).
- Provides an equivalent implementation with the same API shape.
- Is loaded _before_ any application code that depends on the feature.

### Examples

- **`core-js`** — polyfills modern JS language/runtime features (`Promise`,
  `Array.prototype.flat`, `Object.fromEntries`, etc.) for older JS engines.
- **`whatwg-fetch`** — polyfills the `fetch()` API for browsers that only
  have `XMLHttpRequest`.
- **`classlist.js`** — polyfills `Element.classList` for old IE, historically
  needed by Angular's `NgClass` on SVG elements.
- **`web-animations-js`** — polyfills the Web Animations API for
  browsers/versions that don't support it natively, used by Angular's
  `AnimationBuilder`.
- **`Intl` polyfills** (e.g. `@formatjs/intl-*`) — fill in locale/number/date
  formatting APIs on runtimes with partial `Intl` support.
- **`zone.js`** (see below) — not a spec-gap polyfill in the classic sense,
  but conceptually similar: it "fills in" a capability (async-operation
  tracking) that the platform doesn't provide on its own, which Angular's
  change detection depends on.

Modern evergreen browsers (auto-updating Chrome, Firefox, Edge, Safari) need
far fewer polyfills than they used to; most of Angular's historical
polyfill guidance (IE11, `classlist.js`, etc.) is legacy and only matters if
you must support browsers Angular itself has since dropped support for.

## What is `src/polyfills.ts`?

`src/polyfills.ts` is a file the Angular CLI scaffolds into every new
project as the designated place to load polyfills before the application
bootstraps. It's registered as an entry point in the `polyfills` option of
the relevant targets in `angular.json` (build, test, etc.), so its contents
run first, ahead of `main.ts`.

Historically its job was two-fold:

1. Import `zone.js` (required by Angular's change detection).
2. Serve as a documented, ready-made spot to add optional polyfills
   (`classlist.js`, `web-animations-js`, IE-specific shims) for the specific
   set of browsers a project needed to support, with commented-out examples
   and links to `.browserslistrc`.

As of recent Angular CLI versions, `zone.js` can be declared directly as a
literal string in `angular.json`'s `polyfills` array (alongside or instead of
a file path):

```json
"polyfills": ["zone.js"]
```

This lets the build tooling recognize and statically handle `zone.js`
without needing to parse an intermediate `.ts` file.

If a future need arises for an extra polyfill (an old-browser shim, an
`Intl` fill, etc.), the fix is simply to add its package as another entry in
the same `polyfills` array (Angular resolves plain npm package names there
just like `"zone.js"`), or recreate a small TS file for cases needing actual
setup code (e.g. `zone-flags.ts`, see below) and reference it from
`polyfills` alongside `zone.js`.

## What is `zone.js`?

[`zone.js`](https://github.com/angular/angular/tree/main/packages/zone.js) is
a library (originally developed as part of the Angular project) that patches
virtually all async browser/Node APIs — `setTimeout`, `Promise`,
`addEventListener`, XHR, `fetch`, etc. — so that async operations can be
tracked as they cross execution contexts ("zones").

Angular's change detection relies on this: whenever a `Zone`-patched async
task completes (a click handler runs, an HTTP response arrives, a timer
fires), Zone.js notifies Angular so it knows _something might have changed_
and it should re-run change detection. Without Zone.js (or an equivalent
notification mechanism), Angular has no generic way to know when to check
the view for updates after async work.

Because of this deep tie-in, `zone.js` isn't an optional convenience
polyfill — it's a required runtime dependency for the classic
(zone-based) Angular change detection model, which is why the CLI always
loads it first, before any other application code, via the `polyfills`
config.

### Zoneless Angular

Newer Angular versions support an opt-in **zoneless** change detection mode
(`provideExperimentalZonelessChangeDetection()` / stabilizing over time),
where components use signals and explicit notifications instead of Zone.js
patching. In a zoneless application, `zone.js` is removed from the
`polyfills` array entirely, since Angular no longer needs it to know when to
re-render. This project still uses the classic zone-based model, so `zone.js`
remains a required polyfill entry.

## Related topics

- **`.browserslistrc`** — a separate config file (using the
  [Browserslist](https://github.com/browserslist/browserslist) query syntax)
  that tells build tooling which browsers to target. It drives:
  - Autoprefixer's CSS vendor-prefixing.
  - esbuild's/the Angular application builder's JS transpilation target
    (via `getSupportedBrowsers`), which affects bundle size and which
    language features get downleveled.
    It doesn't add polyfills itself — it only tells other tools which browsers
    they need to account for. Angular applies its own baseline-browser default
    if the file is absent.
- **`zone-flags.ts`** — an optional, manually-created file for disabling
  specific Zone.js patches (e.g. `requestAnimationFrame`, certain DOM
  events) for performance reasons. It must be imported _before_ `zone.js`
  itself, because the flags it sets are read by Zone.js at patch time.
- **Differential loading / build targets** — the `polyfills` array is
  configuration, not code you always have to hand-write: entries can be
  either bare package names (resolved by the build system, e.g. `"zone.js"`)
  or paths to a local TypeScript file for custom setup logic.
- **`core-js` vs `zone.js`** — worth distinguishing: `core-js` polyfills
  _language/runtime_ features so JS itself behaves consistently across
  engines; `zone.js` doesn't add a missing API, it _patches existing APIs_
  to add async-context tracking that Angular's framework internals consume.
