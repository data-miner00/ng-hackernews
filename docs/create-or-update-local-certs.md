# Local HTTPS Certificates

The `serve-https` target (`npm run startssl`) serves the dev server over HTTPS using the key and certificate in `.cert/`. This document explains what those files are and how to create them.

## Generating New Pairs

To create or update the certs for new validity, run the following commands on Linux/WSL.

```sh
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout .cert/localhost.key -out .cert/localhost.crt -subj "/CN=localhost"
```

## Warning!

**Do not use these pairs in production environment, strictly for local dev purpose only!**