# react-email turbopack bun prettier bug

When on the Bun runtime, the dependency on prettier fails to load when using turbopack.

```sh
Error: Failed to load external module prettier-3c69a91af3bc4731/plugins/html: ResolveMessage: Cannot find package 'prettier-3c69a91af3bc4731' imported from /.../.next/dev/server/chunks/[turbopack]_runtime.js
    at <anonymous> (.next/dev/server/chunks/[root-of-the-server]__1rrwboa8qkpqp._.js:7:39)
    at processTicksAndRejections
```

To reproduce:

1. Run `bun turbopack` and view `http://localhost:3000/api/test`
2. Run `bun webpack` and view `http://localhost:3000/api/test` for what should happen
