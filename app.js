const Koa = require('koa');
const config = require('./config');
const bodyParser = require('koa-bodyparser'); // koa上下文的formData数据解析到ctx.request.body中
let router = require('./src/routes');

const app = new Koa();

app.use(bodyParser());
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
});