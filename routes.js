const Router = require('koa-router');

let router = new Router();
router.get('/', async ctx => {
    let content = `<h2>hello home</h2>`;
    ctx.body = content;
})

router.post('/api', async ctx => {
    console.log(ctx.request.body);
    let postData = ctx.request.body;
    ctx.body = postData;
})

module.exports = router;