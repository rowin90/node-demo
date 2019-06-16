# node-demo
### express+koa+log+mysql+redis+pm2+pupeteer+docker
1. express
- 比较全的配置，express-generator 生成项目配置
- mysql + log  + redis
```
├── express-project
│   ├── app.js
│   ├── bin
│   ├── config
│   ├── controllers
│   ├── db
│   ├── logs
│   ├── middleware
│   ├── model
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   ├── routes
│   ├── utils
│   └── views
```

2. koa
- koa-generator生成配置
```
├── koa-project
│   ├── app.js
│   ├── bin
│   ├── dump.rdb
│   ├── package.json
│   ├── public
│   ├── routes
│   └── views
```
3. log
- 原生写日志文件，日志分析，拆分日志
```
├── log-strea
