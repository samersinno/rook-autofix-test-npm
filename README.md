# rook-autofix-test-npm

A tiny npm project with deliberately outdated dependencies, for testing automated dependency fixes. It is a test fixture. Do not deploy it.

## What is in it

- `package.json` pins three direct dependencies to old versions that have known vulnerabilities:
  `lodash 4.17.15`, `minimist 1.2.5` and `axios 0.21.1`.
- `package-lock.json` is committed (npm with a lockfile).
- `npm audit` reports the fix for each as a non-major move: `minimist` to 1.2.8 (patch), `lodash` to 4.18.1 and `axios` to 0.21.4. A fix should only touch `package.json` and `package-lock.json`.
- `npm test` runs two small tests that should still pass after any fix.

## Try it

```sh
npm ci
npm test
node index.js --name kromse
```

## Expected result of a good fix

A pull request that changes only `package.json` and `package-lock.json`, bumps the versions above, and leaves `npm test` green.
