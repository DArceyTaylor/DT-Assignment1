var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/About', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
/* GET home page. */
router.get('/Projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET home page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
