# node-demo
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
├── log-stream
│   ├── copy.sh
│   ├── log.js
│   └── readline.js
```
4. mysql
```
├── mysql
│   ├── config.js
│   ├── db.js
│   └── index.js
```
5. redis
```
├── redis
│   ├── config.js
│   ├── db.js
│   └── index.js
```
6. mongodb
```
├── mongod
│   ├── database.js
│   ├── index.js
│   ├── schema.js
│   └── test.js
```
7. pm2
- pm2自动配置错误日志，普通日志
```
├── pm2
│   ├── app.js
│   ├── deploy.yml
│   ├── logs
│   ├── package-lock.json
│   ├── package.json
│   └── pm2.conf.json
```
8. pupeteer
- 抓取京东页面产品信息，存入 mongod
```
├── jd_pupeteer
│   ├── child_process.js
│   ├── database.js
│   ├── index.js
│   ├── puprteer_jd.js
│   └── schema_jd.js
```
9. docker项目
```
├── docker-demo
│   ├── docker-compose.yml
│   ├── nginx
│   │   ├── Dockerfile
│   │   └── nginx.conf
│   └── nodeserver
│       └── Dockerfile
```
