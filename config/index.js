const config = {
  // 启动端口
  port: 8888,
  // 数据库配置
  database: {
    host: '180.76.103.151',
    user: 'zyhahaha',
    password: 'zy@980355088',
    database: 'koa_test',
    port: 3306,
    multipleStatements: true // 允许多条sql同时执行
  }
};

module.exports = config;
