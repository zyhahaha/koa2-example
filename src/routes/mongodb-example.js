const Router = require('koa-router');
const mongoDB = require('../db/mongodb');
const DB_TABLE = 'example_table';

let router = new Router();

// create
router.post('/example/create', async ctx => {
  let postData = ctx.request.body;
  // params
  let hash = postData.hash;
  let name = postData.name || '';
  let tim = Date.now();
  // insert
  ctx.body = {
    code: 500
  };
})

// query
router.get('/example/query', async ctx => {
  ctx.body = {
    code: 500
  };
})

module.exports = router;
