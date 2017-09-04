var config = require('../config')

var ora = require('ora')
var chalk = require('chalk')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

module.exports = {
  start: function () {
    var port = process.env.PORT || config.port

    var app = express()

    var _resolveCompiled
    var compiledPromise = new Promise(resolve => {
      _resolveCompiled = resolve
    })

    var spinner = ora(chalk.cyan('Building assets...'))
    spinner.start()
    webpack(webpackConfig, (err, stats) => {
      spinner.stop()

      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')

      if (stats.hasErrors()) {
        console.log(chalk.red('> Build failed with errors.'))
        process.exit(1)
      }

      console.log(chalk.cyan('> Build complete.'))

      _resolveCompiled()
    })

    // serve pure static assets
    app.use(express.static(config.assetsRoot))

    var _resolveReady
    var readyPromise = new Promise(resolve => {
      _resolveReady = resolve
    })

    var server;

    compiledPromise.then(text => {
      console.log(chalk.cyan('> Starting server in production mode...'))
      server = app.listen(port)
      console.log(chalk.cyan('> Listening at 0.0.0.0:8080...'))
      _resolveReady()
    })

    return {
      ready: readyPromise,
      close: () => {
        server.close()
      }
    }
  }
}
