var path = require('path')

module.exports = Object.assign({
  port: 8080,
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  cssSourceMap: false
}, process.env.NODE_ENV === 'production'
  ? require('./prod.env')
  : require ('./dev.env')
)
