# koa2-example
自用koa2项目模板，支持服务的基础功能，可在模板上进行拓展

### 第三方包
1. koa-router （url路由管理）
2. koa-bodyparser （http请求体解析）
3. node-schedule （nodejs定时任务）
4. mysql （mysql数据库操作）
5. mongodb （mongodb数据库操作）
6. litedb （数据在本地存储和读取，快捷使用不用配置数据库）
7. socket.io （websocket功能）

### 数据库
1. mysql
2. mongodb
3. localFile（本地存储）

### web安全
1. CSRF
2. XSS
3. SQL注入 （sql语句不要使用字符串拼接，要使用占位符?，内部会自动调用connection.escape方法对参数进行编码）

### 快速、简单的koa接口服务
* 直接在本地读写数据不用连接数据库（不用搭建数据库，也不用配置，可以快速的启动）
* 可选的连接数据库，读写本地及mongodb使用的api保持一致（mongodb）