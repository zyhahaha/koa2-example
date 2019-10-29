const Koa = require('koa');
const bodyParser = require('koa-bodyparser'); // koa上下文的formData数据解析到ctx.request.body中
const scheduleTask = require('./src/schedule_task'); // 定时任务
const config = require('./config');

const app = new Koa();

app.use(bodyParser());
app
  .use(require('./src/routes/server_perf.js').routes())
  .use(require('./src/routes/test').routes())
  .use(require('./src/routes/cv').routes())
  // .use(router.allowedMethods());

app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
});

// 注入其它任务
scheduleTask.saveServerPerfTask(); // 收集性能定时任务
