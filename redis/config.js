let REDIS_CONF;
if (process.env.NODE_ENV === 'development') {
  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  };
}

if (process.env.NODE_ENV === 'production') {
  REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
  };
}

exports.REDIS_CONF = REDIS_CONF;
