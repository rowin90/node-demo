const { connect } = require('./database');
var mongoose = require('mongoose');
(async () => {
  await connect();
  require('./schema');
  require('./test');
})();
