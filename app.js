const Koa = require('koa');
const bodyParser = require('koa-bodyparser'); // koa上下文的formData数据解析到ctx.request.body中
let router = require('./src/routes');

// const db = require('../db');

const app = new Koa();

app.use(bodyParser());
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8888, () => {
    console.log('http://localhost:8888');
});