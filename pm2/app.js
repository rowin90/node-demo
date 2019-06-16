const http = require('http');

http
  .createServer((req, res) => {
    // 模拟日志
    console.log('log');

    // 模拟错误
    console.error('err log');

    if (req.url == '/err') {
      throw new Error('node stop');
    }

    res.setHeader('content-type', 'application/json');
    res.end(
      JSON.stringify({
        errNo: 0,
        msg: 'pm2 test server 333455'
      })
    );
  })
  .listen(8001, () => {
    console.log('listen at 8000');
  });
