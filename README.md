# npm-statistics

![NPM Stats](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FNicBell%2Fnpm-statistics%2Fmaster%2Fstats.json)

NPM Download Statistics for NicBell Open Source Projects. Updated Daily.

## Downloads

<!-- Please do not modify this auto generated content -->
<!-- AUTO-GENERATED-CONTENT:START (PACKAGES) -->
| Name                                                                       | Downloads     |
| -------------------------------------------------------------------------- | ------------- |
| **Total**                                                                  | **2,928,047** |
| [lite-ready](https://www.npmjs.com/package/lite-ready)                     | 2,760,309     |
| [postscss](https://www.npmjs.com/package/postscss)                         | 95,169        |
| [grunt-shimly](https://www.npmjs.com/package/grunt-shimly)                 | 18,220        |
| [shimly](https://www.npmjs.com/package/shimly)                             | 14,558        |
| [parsehtml](https://www.npmjs.com/package/parsehtml)                       | 13,823        |
| [attach.js](https://www.npmjs.com/package/attach.js)                       | 10,558        |
| [utube](https://www.npmjs.com/package/utube)                               | 9,861         |
| [daccord-validation](https://www.npmjs.com/package/daccord-validation)     | 4,087         |
| [angular-scriptloader](https://www.npmjs.com/package/angular-scriptloader) | 1,462         |
| **Total**                                                                  | **2,928,047** |
<!-- AUTO-GENERATED-CONTENT:END -->

### Wanna use `npm-statistics`?

1. `Fork` this repository.
2. Add your npm username/author or list of packages in `package.json` as `npm-stats` key.
   for author

```js
{
  "npm-stats": "NicBell"
}
```

or for packages

```js
{
  "npm-stats": [
    "markdown-magic",
    "analytics"
  ]
}
```

3. Run `npm i` and then `npm start` to generate the Downloads.
4. The repo comes with a daily CRON job that updates the Downloads.
5. For updating the badge replace `NicBell` in badge endpoint to your github username/orgname.
   https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2F`username`%2Fnpm-statistics%2Fmaster%2Fstats.json
6. Enable `GitHub Actions` for your forked repo, as it is enabled by default for forks.

## Ref

- [npmtotal](https://github.com/maddhruv/npmtotal) - Find you npm download statistics
- [Props to ClearTax for this awesome action](https://github.com/ClearTax/npm-statistics)
