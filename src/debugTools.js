

const config = require('./config');
const log = config.debugMode ? console.log.bind(console) : () => { }

module.exports = log