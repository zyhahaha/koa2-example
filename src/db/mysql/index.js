let mysql = require('mysql');
const config = require('../../../config');
let pool = mysql.createPool(config.database);
let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) return reject(err);
      connection.query(sql, values, (err, rows) => {
        if(err) return reject(err);
        resolve(rows);
        connection.release();
      })
    })
  })
}

module.exports = {
  query
};