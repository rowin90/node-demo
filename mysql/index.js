const { exec } = require('./db');

(async () => {
  let res = await exec('select * from msg');
  console.log(res);
})();
