let MYSQL_CONF;
if (process.env.NODE_ENV === 'development') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'self'
  };
}

if (process.env.NODE_ENV === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'cAuth'
  };
}

exports.MYSQL_CONF = MYSQL_CONF;
