# koa2-example
koa2 的项目模板

### 第三方包
1.node-schedule （nodejs定时任务）

### 数据库
1. mysql
2. mongodb
3. redis

### web安全
1. CSRF
2. XSS
3. SQL注入 （sql语句不要使用字符串拼接，要使用占位符?，内部会自动调用connection.escape方法对参数进行编码）
