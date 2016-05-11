var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  var _this = this;

  var query_name = req.param('question');

  console.log("Searching questions: " + query_name);
  var db = req.db;
  var collection = db.get('questions');
  var questionCount = 10;

  var options = {
    "limit": 5,
    "skip": Math.random() * questionCount
  }

  console.log(options);

  collection.find({}, options, function(err, doc){
    if (err) {
      res.send("Error Occured");
    }
    res.send(doc);
  });

});

module.exports = router;
