var user;
var questions;
var count = 0;
var score = 0;

function startGame(){
  var _this = this;
  console.log("Loading Data");

  $("#gameStart").hide();
  $("#gameplay").show();

  $.ajax({
    url: "questions",
    async: false,
    success: function(data){
      window.questions = data;
      play();
  }})
}


function play() {
  var data = window.questions;
  console.log("Data Loaded: " + data);
  //Loading Question 1;

  var question = $("#question");
  var ans1 = $("#ans1");
  var ans2 = $("#ans2");
  var ans3 = $("#ans3");
  var ans4 = $("#ans4");

  question.val(data[count].question);
  ans1.val(data[count].a1);
  ans2.val(data[count].a2);
  ans3.val(data[count].a3);
  ans4.val(data[count].a4);
}

function checkAnswer(selection){
  alert("Answer Selected " + selection);
  var questionSet = questions[count];

  if (selection == questionSet.answer) {
    score += 10;
  }

  count++;

  if (count <= 4) {
      play();
  } else {
    endGame();
  }

}

function endGame(){
  //Print Report

  //Save Stats to Database
}
