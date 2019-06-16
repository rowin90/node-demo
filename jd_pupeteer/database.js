const mongoose = require('mongoose');
const db = 'mongodb://localhost/pupeteer';

exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(db);

    mongoose.connection.on('disconnect', () => {
      throw new Error('数据库断开');
    });
    mongoose.connection.on('error', err => {
      throw new Error('数据库挂了');
    });
    mongoose.connection.on('open', () => {
      resolve();
      console.log('数据库链接成功！');
    });
  });
};
