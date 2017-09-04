var server = process.env.NODE_ENV === 'production'
  ? require('./server.prod')
  : require('./server.dev')

console.log('> Node env:', process.env.NODE_ENV || 'development')

module.exports = server.start()
