# koa2-example
koa2 example

### 第三方包
1.node-schedule （nodejs定时任务）

### 数据库
1. mysql
2. redis

### 功能点
1. 微信公众号和微信小程序开发

### 微服务
1. ResultFul API
2. 消息队列RabbitMQ
3. 服务发现Consul（在这个项目中服务较少，没有使用的必要）
4. 熔断机制

### web安全
1. CSRF
2. XSS
3. SQL注入 （sql语句不要使用字符串拼接，要使用占位符?，内部会自动调用connection.escape方法对参数进行编码）
