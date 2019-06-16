const fs = require('fs');
const path = require('path');
const readline = require('readline');

const fullFileName = path.join(__dirname, '../', '../', '/logs', 'access.log');

// 创建读取流
const readStream = fs.createReadStream(fullFileName);

// 创建readline 对象
const rl = readline.createInterface({
  input: readStream
});

let chromeNum = 0;
let sum = 0;

// 逐行读取
rl.on('line', lineData => {
  if (!lineData) {
    return;
  }

  // 记录总长数
  sum++;

  // 根据日志记录的规则，拆分分析出 chrome 占比
  const arr = lineData.split(' -- ');
  if (arr[2] && arr[2].indexOf('chrome') >= 0) {
    // 累加 chrome 的数量
    chromeNum++;
  }
});

rl.on('close', () => {
  console.log(chromeNum / sum);
});
