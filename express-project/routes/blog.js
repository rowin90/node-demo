const express = require('express');
const router = express.Router();
const { getList } = require('../controllers/blog');
const { SuccessModel } = require('../model/resModel');

/* GET home page. */
router.get('/list', function(req, res, next) {
  let id = req.query.id || '';

  const result = getList(id);

  result.then(listData => {
    res.json(new SuccessModel(listData, '成功'));
  });
});

module.exports = router;
