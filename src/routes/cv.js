const Router = require('koa-router');
const db = require('../db');

let router = new Router();

// cv
router.post('/cv/message/create', async ctx => {
  let postData = ctx.request.body;
  let name = postData.name;
  let message = postData.message;
  if (!name || !message) return '参数不正确';
  let sql = 'INSERT INTO db_message (name, message) VALUES (?, ?);';
  await db.query(sql, [name, message]).then(res => {
    ctx.body = res;
  })
})
router.get('/cv/message/query', async ctx => {
  let sql = 'SELECT * FROM db_message;';
  await db.query(sql).then(res => {
    ctx.body = res;
  })
})

module.exports = router;