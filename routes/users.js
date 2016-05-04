var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('got something');
  var name=req.param('fullName')
  var username = req.param('username');
  var email= req.param('emailaddress');
  var password= req.param('password');

});

router.post('/', function(req, res) {
  console.log("create Something");

  var name=req.param('fullName')
  var username = req.param('username');
  var email= req.param('emailaddress');
  var password= req.param('password');

  // Set internal db variable
  var db = req.db;

 // Setting Collection for People
  var collection = db.get('people');

  // Submitting to Database
  collection.insert({
    "fullname": name,
    "username": username,
    "email": email,
    "password": password
  }, function(err, doc) {
    if (err) {
      console.log("Error Occured");
      res.send("Something Bad Happened");
    } else {
      res.send("Inserted");
    }
  });

});

router.put('/', function(req, res) {
  console.log("Edit Something");
  var name=req.param('fullName')
  var username = req.param('username');
  var email= req.param('emailaddress');
  var password= req.param('password');
  res.send('Hello ' + username);
});

router.delete('/', function(req, res) {
  console.log("Delete Something");
  var name=req.param('fullName')
  var username = req.param('username');
  var email= req.param('emailaddress');
  var password= req.param('password');
  res.send('Hello ' + username);
});


module.exports = router;
