const path = require('path')

module.exports = (option, ctx) => ({
  enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),
})
