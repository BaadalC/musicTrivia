var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hi Baadal');
});

router.post('/', function(req, res) {
  console.log("Got Something");
  var username = req.param('username');
  res.send('Hello ' + username);
})

module.exports = router;
