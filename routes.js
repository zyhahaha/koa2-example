const Router = require('koa-router');

let router = new Router();
router.get('/', async ctx => {
    let content = `<h2>hello home</h2>`;
    ctx.body = content;
})

module.exports = router;