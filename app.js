const Koa = require('koa');
const bodyParser = require('koa-bodyparser'); // koa上下文的formData数据解析到ctx.request.body中
const scheduleTask = require('./src/schedule_task');
const config = require('./config');

const app = new Koa();

app.use(bodyParser());
app
  .use(require('./src/routes/bt.js').routes())

app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
});

// run task
// scheduleTask.saveServerPerfTask();