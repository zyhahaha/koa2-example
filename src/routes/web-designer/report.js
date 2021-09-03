const Router = require('koa-router');
const lowDB = require('../../db/lowdb');
const DB_TABLE = 'example_table';

const dbInstance = new lowDB(DB_TABLE)
const router = new Router();

// add
router.post('/report/add', async ctx => {
  let postData = ctx.request.body;
  // params
  let id = Date.now();
  let name = postData.name || '';
  let data = postData.data || {};
  // insert
  let resData = await dbInstance.insert({
    id,
    name,
    data
  })

  ctx.body = {
    code: 200,
    data: resData
  };
})

// query
router.get('/report/query', async ctx => {
  let data = await dbInstance.query()
  ctx.body = {
    code: 200,
    data
  };
})

module.exports = router;
