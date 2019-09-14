const Router = require('koa-router');
const db = require('./db');

let router = new Router();
router.get('/', async ctx => {
    let content = `<h2>hello home</h2>`;
    ctx.body = content;
})

router.post('/api', async ctx => {
    let postData = ctx.request.body;
    ctx.body = postData;
})

router.post('/api/sql', async ctx => {
  let sql = `SELECT * FROM db_account;`;
  await db.query(sql).then(res => {
    ctx.body = res;
  })
})

// cv
router.post('/cv/message/create', async ctx => {
  let postData = ctx.request.body;
  let name = postData.name;
  let message = postData.message;
  if (!name || !message) return '参数不正确';
  let sql = `INSERT INTO db_message (name, message) VALUES ("${name}", "${message}");`;
  await db.query(sql).then(res => {
    ctx.body = res;
  })
})
router.get('/cv/message/query', async ctx => {
  let sql = `SELECT * FROM db_message;`;
  await db.query(sql).then(res => {
    ctx.body = res;
  })
})

// checkout
function checkoutParams(params){

}

module.exports = router;