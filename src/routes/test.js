const Router = require('koa-router');
const db = require('../db');

let router = new Router();
router.get('/', async ctx => {
    let content = '<h2>hello home</h2>';
    ctx.body = content;
})

router.post('/api', async ctx => {
    let postData = ctx.request.body;
    ctx.body = postData;
})

router.post('/api/sql', async ctx => {
  let sql = 'SELECT * FROM db_account;';
  await db.query(sql).then(res => {
    ctx.body = res;
  })
})

// 消息队列 RabbitMQ

// checkout
function checkoutParams(params){

}
// SQL注入
function checkoutSql(){

}

module.exports = router;