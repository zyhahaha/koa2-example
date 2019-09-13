const config = {
  // 启动端口
  port: 8888,
  // 数据库配置
  database: {
    host: '129.204.128.13',
    user: 'root',
    password: '123456',
    database: 'test',
    port: 3306,
    multipleStatements: true // 允许多条sql同时执行
  }
};

module.exports = config;