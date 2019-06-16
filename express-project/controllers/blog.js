const xss = require('xss');
const { exec } = require('../db/mysql');

const getList = id => {
  let sql = 'select * from info where 1=1';
  if (id) {
    sql += `and id = ${id}`;
  }

  // sql += `order by id desc`;

  // 返回 promise
  return exec(sql);
};

module.exports = {
  getList
};
