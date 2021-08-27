# koa2-example
自用koa2项目模板，支持服务的基础功能，可在模板上进行拓展

### 第三方包
1. koa-router （url路由管理）
2. koa-bodyparser （http请求体解析）
3. node-schedule （nodejs定时任务）
4. mysql （mysql数据库操作）
5. mongodb （mongodb数据库操作）
6. lowdb （数据在本地存储和读取，快捷使用不用配置数据库）

### 数据库
1. mysql
2. mongodb
3. localFile（本地存储）

### web安全
1. CSRF
2. XSS
3. SQL注入 （sql语句不要使用字符串拼接，要使用占位符?，内部会自动调用connection.escape方法对参数进行编码）
