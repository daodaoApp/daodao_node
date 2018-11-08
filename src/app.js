const Koa = require('koa');
const config = require('./config.js');
const app = new Koa()
const log = require('./debugTools')

app.listen(config.port)
log(`app is running on port ${config.port}`)
