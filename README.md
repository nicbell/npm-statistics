# npm-statistics

![NPM Stats](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FNicBell%2Fnpm-statistics%2Fmaster%2Fstats.json)

NPM Download Statistics for NicBell Open Source Projects. Updated Daily.

## Downloads

<!-- Please do not modify this auto generated content -->
<!-- AUTO-GENERATED-CONTENT:START (PACKAGES) -->
| Name                                                                       | Downloads     |
| -------------------------------------------------------------------------- | ------------- |
| **Total**                                                                  | **2,020,758** |
| [lite-ready](https://www.npmjs.com/package/lite-ready)                     | 1,873,276     |
| [postscss](https://www.npmjs.com/package/postscss)                         | 82,471        |
| [grunt-shimly](https://www.npmjs.com/package/grunt-shimly)                 | 17,150        |
| [shimly](https://www.npmjs.com/package/shimly)                             | 13,649        |
| [attach.js](https://www.npmjs.com/package/attach.js)                       | 10,242        |
| [parsehtml](https://www.npmjs.com/package/parsehtml)                       | 9,867         |
| [utube](https://www.npmjs.com/package/utube)                               | 9,458         |
| [daccord-validation](https://www.npmjs.com/package/daccord-validation)     | 3,462         |
| [angular-scriptloader](https://www.npmjs.com/package/angular-scriptloader) | 1,183         |
| **Total**                                                                  | **2,020,758** |
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
