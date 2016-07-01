var express = require('express');
var router = express.Router();
var dataInfo = require('../libs/data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({dataInfo: dataInfo});
});


router.get('/users', function(req, res, next) {
  res.json({dataInfo: dataInfo});
});

router.get('/activeusers', function(req, res, next) {
  res.json({dataInfo: dataInfo});
});
module.exports = router;
