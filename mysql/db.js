const mysql = require('mysql2');
const { MYSQL_CONF } = require('./config');

// 创建链接对象
const connection = mysql.createConnection(MYSQL_CONF);

// 开始链接
connection.connect();

// 统一执行 sql 的函数
const exec = sql => {
  return new Promise((resolve, reject) => {
    connection.query(sql, function(err, result) {
      if (err) {
        reject(err);
        return false;
      }
      resolve(result);
    });
  });
};

module.exports = {
  exec
};
