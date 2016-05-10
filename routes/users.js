var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var query_name = req.param('username');

  console.log("Searching Username: " + query_name);
  var db = req.db;
  var collection = db.get('users');

  collection.find({"username": query_name}, function(err, doc){
    if (err) {
      res.send("Error Occured");
    }
    res.send(doc);
  });
});

router.post('/validate/', function(req,res) {
  var username = req.param('username');
  var password = req.param('password');

  var db = req.db;
  var collection = db.get('users');

  collection.find({"username": username, "password": password}, function(err, doc){
    if (err) {
      res.send("Error Occured");
    }
    if (doc.length >= 1) {
      res.send("Valid User")
    } else {
      res.send("Invalid User");
    }
  })
});

router.post('/', function(req, res) {
  console.log("create Something");

// reading param value for users
  var username = req.param('username');
  var name = req.param('name')
  var email = req.param('email');
  var password = req.param('password');

  // Set internal db variable
  var db = req.db;

 // Setting Collection for People
  var collection = db.get('users');

  // Submitting to Database
  collection.insert({
    "name": name,
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
