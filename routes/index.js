var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.html');
});

router.get('/aboutus', function (req, res, next) {
  res.render('aboutus.html');
});

router.get('/detail', function (req, res, next) {
  res.render('detail.html');
});

router.get('/device', function (req, res, next) {
  res.render('device.html');
});

router.get('/findstore', function (req, res, next) {
  res.render('findstore.html');
});

router.get('/intro', function (req, res, next) {
  res.render('intro.html');
});

router.get('/review', function (req, res, next) {
  res.render('review.html');
});

router.get('/size', function (req, res, next) {
  res.render('size.html');
});

router.get('/template', function (req, res, next) {
  res.render('template.html');
});



module.exports = router;
