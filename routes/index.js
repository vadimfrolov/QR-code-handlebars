const express = require('express');
const router = express.Router();
const QRCode = require('qrcode')
const SlackBot = require('slackbots');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/start', function (req, res, next) {
  res.render('start');
});


router.post('/makenewqr', function (req, res, next) {

  const info = req.body.post
  QRCode.toDataURL(info, function (err, srcpic) {
    console.log(srcpic)
    res.json({img: srcpic})
  })
})



  module.exports = router;


