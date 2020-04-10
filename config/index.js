const config = {
  // 启动端口
  port: 8888,
  // 数据库配置
  database: {
    host: '106.13.238.252',
    user: 'root',
    password: 'zy@980355088',
    database: 'koa_test',
    port: 3306,
    multipleStatements: true // 允许多条sql同时执行
  }
};

module.exports = config;
