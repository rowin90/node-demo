const { connect } = require('./database');

(async () => {
  await connect();
  require('./schema_jd');
  require('./child_process');
})();
