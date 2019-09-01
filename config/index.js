const config = {
  // 启动端口
  port: 8088,
  // 数据库配置
  database: {
    host: '47.96.234.53',
    user: 'root',
    password: 'basepassword',
    database: 'test',
    port: 3306,
    multipleStatements: true // 允许多条sql同时执行
  }
};

module.exports = config;