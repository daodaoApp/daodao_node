const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const controller = require('./controller');
const config = require('./config.js');
const log = require('./debugTools')

const app = new Koa()

app.use(bodyParser())

const isProduction = process.env.NODE_ENV === 'production';

app.use((ctx, next) => {
  console.log('Process ' + ctx.request.method + ' ' + ctx.request.url);
    const startTime = Date.now();
    let execTime;
  next();
  execTime = Date.now() - startTime;
  ctx.response.set('X-Response-Time', `${execTime} ms`);
})

// if(!isProduction) {
//    const staticFiles = require('./staticFile');
//    app.use(staticFiles('/static', __dirname + '/static'));
// }

app.use(controller())

app.listen(config.port)

log(`app is running on port ${config.port}`)
