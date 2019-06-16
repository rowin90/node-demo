const cp = require('child_process');
const mongoose = require('mongoose');
const { resolve } = require('path');
const JD = mongoose.model('jd');

!(async () => {
  const script = resolve(__dirname, './puprteer_jd.js');
  const child = cp.fork(script, []);

  child.on('message', data => {
    let result = data.result;
    result.forEach(async item => {
      let jd = new JD(item);
      await jd.save(function(err, doc) {
        if (err) {
          console.log(err);
        }
        console.log(doc);
      });
    });
  });

  child.on('err', err => {
    console.log(err);
  });
})();
