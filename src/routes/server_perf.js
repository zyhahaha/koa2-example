const Router = require('koa-router');
const db = require('../db');
const SERVER_PERF_DB = 'server_perf';

let router = new Router();

// create
router.post('/cv/message/create', async ctx => {
  let postData = ctx.request.body;
  let server_ip = postData.server_ip;
  let cpu_perf = postData.cpu_perf;
  let memory_perf = postData.memory_perf;
  let tim = Date.now();
  if (!server_ip || !cpu_perf) return '参数不正确';
  let sql = `INSERT INTO ${SERVER_PERF_DB} (server_ip, cpu_perf, memory_perf, tim) VALUES (?, ?, ?, ?);`;
  await db.query(sql, [server_ip, cpu_perf, memory_perf, tim]).then(res => {
    ctx.body = res;
  })
})

// query
router.get('/cv/message/query', async ctx => {
  let sql = `SELECT * FROM ${SERVER_PERF_DB};`;
  await db.query(sql).then(res => {
    ctx.body = res;
  })
})

module.exports = router;