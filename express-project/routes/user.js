const express = require('express');
const router = express.Router();
const { login } = require('../controllers/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

/* GET home page. */
router.post('/login', function(req, res, next) {
  let { username, password } = req.body;
  const result = login(username, password);
  result.then(data => {
    if (data.username) {
      req.session.username = data.username;
      req.session.age = data.age;

      res.json(new SuccessModel());
      return;
    }

    res.json(new ErrorModel('登录失败'));
  });
});

module.exports = router;
