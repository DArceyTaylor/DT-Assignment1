var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});
/* GET About Me page. */
router.get('/#about', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});
/* GET Projects page. */
router.get('/#projects', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});
/* GET Contact Me page. */
router.get('/#contact', function(req, res, next) {
  res.render('contact', { title: 'Portfolio' });
});

module.exports = router;
