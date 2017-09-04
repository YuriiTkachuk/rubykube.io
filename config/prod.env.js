var path = require('path')

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  index: path.resolve(__dirname, '../dist/index.html'),
  autoOpenBrowser: false,
  productionSourceMap: false,
  productionGzip: true,
  productionGzipExtensions: ['js', 'css']
}
