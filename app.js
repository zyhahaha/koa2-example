const Koa = require('koa');
const bodyParser = require('koa-bodyparser'); // koa上下文的formData数据解析到ctx.request.body中
const scheduleTask = require('./src/schedule_task');
const config = require('./config');

const app = new Koa();

app.use(bodyParser());

// mysql example
// app.use(require('./src/routes/example/mysql-example.js').routes())

// mongodb example
// app.use(require('./src/routes/example/mongodb-example.js').routes())

// litedb example
app.use(require('./src/routes/example/litedb-example.js').routes())

// report api
// app.use(require('./src/routes/web-designer/report.js').routes())

app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
});

// 计划任务 example
// scheduleTask.saveServerPerfTask();