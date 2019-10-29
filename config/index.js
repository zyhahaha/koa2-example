const config = {
  // 启动端口
  port: 8888,
  // 数据库配置
  database: {
    host: '47.96.234.53',
    user: 'root',
    password: '',
    database: 'koa_test',
    port: 3306,
    multipleStatements: true // 允许多条sql同时执行
  }
};

module.exports = config;