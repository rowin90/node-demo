let MYSQL_CONF;
let REDIS_CONF;
if (process.env.NODE_ENV === 'development') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'self'
  };

  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  };
}

if (process.env.NODE_ENV === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'self'
  };

  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  };
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
};
