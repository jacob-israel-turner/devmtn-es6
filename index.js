var register = require('babel-core/register')
register({
  presets: ["es2015"]
})
require('./examples')
