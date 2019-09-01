const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
let router = require('./routes');
const app = new Koa();

app.use(bodyParser());

app
  .use(router.routes())
  .use(router.allowedMethods());
// app.use(async ctx => {
//     ctx.body = 'Hello koa';
// })

app.listen(8888, () => {
    console.log('http://localhost:8888');
});