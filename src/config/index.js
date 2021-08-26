const environment = process.env.VUE_APP_ENV || 'development'
const config = require('./env.' + environment)
module.exports = config