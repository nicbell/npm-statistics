const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const table = require('markdown-table')
const markdownMagic = require('markdown-magic')
const npmtotal = require('npmtotal')
const pkg = require('./package.json')
const badgeStats = require('./stats.json')

const key = pkg['npm-stats']

if (!key) {
  throw new Error('Please add `npm-stats` to your package.json'); // eslint-disable-line
}

const exclude = [
]

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function generateMarkdownTable(tableRows, sum) {
  const total = numberWithCommas(sum)
  const config = {
    transforms: {
      PACKAGES() {
        return table([
          ['Name', 'Downloads'],
          ['**Total**', `**${total}**`],
          ...tableRows,
          ['**Total**', `**${total}**`],
        ])
      }
    }
  }

  markdownMagic(path.join(__dirname, 'README.md'), config, d => {
    console.log(`Updated total downloads ${sum}`)
  })
}

function generatePackageStats(sortedStats) {
    // Clear old stats
    if (fs.existsSync('./packages/')) {
      fs.readdirSync('./packages/').forEach(file => fs.rmSync('./packages/' + file, { recursive: true }))
    } else {
      fs.mkdirSync('./packages/');
    }
  
    // Collect stats file for each package
    sortedStats.forEach(element => {
      badgeStats.message = element[1]
      var file = element[0].match(/\[(.*?)\]/gi)[0].replace(/[\[\]']+/g, '')
      fs.writeFileSync(`./packages/${file}.json`, JSON.stringify(badgeStats, null, 2))
      console.log(element)
    });
}

(async () => {
  console.log(`Running npmtotal(${key}), This can take some time`)
  const stats = await npmtotal(key, {
    exclude: exclude,
    startDate: '2013-01-01'
  })

  const sortedStats = _.reverse(
    _.sortBy(stats.stats, [
      function (o) {
        return o[1]
      }
    ])
  ).filter((d) => {
    const [name, count] = d
    if (count === 0) {
      return false
    }
    if (name.match(/^@middy/)) {
      return false
    }
    return true
  }).map((d) => {
    const [name, count] = d
    return [
      `[${name}](https://www.npmjs.com/package/${name})`,
      numberWithCommas(count)
    ]
  })

  badgeStats.message = `${numberWithCommas(stats.sum)} Downloads`

  await fs.writeFileSync('./stats.json', JSON.stringify(badgeStats, null, 2))

  generateMarkdownTable(sortedStats, stats.sum)
  generatePackageStats(sortedStats)
})()
