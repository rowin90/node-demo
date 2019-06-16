var mongoose = require('mongoose');
var glob = require('glob');
var { resolve } = require('path');
mongoose.Promise = global.Promise;
exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost:27017/test');

    mongoose.connection.on('open', () => {
      resolve();
      console.log('链接数据库');
    });
  });
};
