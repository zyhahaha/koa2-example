const Router = require('koa-router');
const mysqlDb = require(global._DirRoot + '/src/db/mysql');
const DB_TABLE = 'bt_info';

let router = new Router();

// create
router.post('/bt/create', async ctx => {
  let postData = ctx.request.body;
  // params
  let hash = postData.hash;
  let name = postData.name || '';
  let tim = Date.now();
  // insert
  if (!hash) return ctx.body = {
    code: 500
  };
  let sql = `INSERT INTO ${DB_TABLE} (hash, tim) VALUES (?, ?);`;
  await mysqlDb.query(sql, [hash, tim]).then(res => {
    ctx.body = res;
  })
})

// query
router.get('/bt/query', async ctx => {
  let sql = `SELECT * FROM ${DB_TABLE};`;
  await mysqlDb.query(sql).then(res => {
    ctx.body = res;
  })
})

module.exports = router;
