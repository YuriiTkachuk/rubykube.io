var utils = require('./utils')

module.exports = {
  loaders: utils.cssLoaders({
    extract: process.env.NODE_ENV === 'production'
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
