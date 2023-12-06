This is a minimal example demonstrating a potential TypeScript bug (where TypeScript fails to detect a potentially `undefined` value).

[problem.ts](problem.ts) contains the example.

For the TypeScript verion used, see [package.json](package.json).

Requires `node` + `npm` or compatible. To compile and execute:

```
npm install
npx ts-node problem.ts
```

(Thanks to [Bobae Kang](https://github.com/bobaekang) https://bobaekang.com/blog/minimal-typescript-project-setup-for-curious-minds/ for explaining how to set up such a minimal project.)
