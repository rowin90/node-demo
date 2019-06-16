const xss = require('xss');
const { exec } = require('../db/mysql');
const { genPassword } = require('../utils/crypto');

const login = (username, password) => {
  username = escape(username);

  // 生成加密密码
  password = genPassword(password);

  const sql = `select username,age from user where username='${username}'`;

  // 返回 promise
  return exec(sql).then(rows => {
    return rows[0] || {};
  });
};

module.exports = {
  login
};
