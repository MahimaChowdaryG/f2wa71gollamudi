var express = require('express');
var router = express.Router();

/* GET aboutme page */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Mahima Chowdary Gollamudi'});
});

module.exports = router;
