var user;
var questions;
var count = 0;
var score = 0;

function startGame(){
  var _this = this;
  var user = window.user;

  console.log("Loading Data");

  $("#gameStart").hide();
  $("#gameplay").show();
  updateCount(count + 1);
  updateScore(0);

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
  disableAnswer();
  console.log(count);

  var questionSet = questions[count];

  console.log(questionSet);

  if (selection == questionSet.answer) {
    score += 10;
    updateScore(score);
    updateMessage("Correct Answer !!");
  } else {
    updateMessage("Incorrect Answer");
  }

  if (count == 4) {
    endGame();
  }

}

function endGame(){
  //Print Report
  $("#gameplay").hide();
  $("#scores").show();
  $('#totalScore').text(score);

  //Save Stats to Database
}

function gameContinue(){
  count++;
  enableAnswer();
  play();
  updateCount(count + 1);
}

function disableAnswer(){
  var ans1 = $("#ans1");
  var ans2 = $("#ans2");
  var ans3 = $("#ans3");
  var ans4 = $("#ans4");

  ans1.attr('disabled', 'disabled');
  ans2.attr('disabled', 'disabled');
  ans3.attr('disabled', 'disabled');
  ans4.attr('disabled', 'disabled');
}

function enableAnswer(){
  $("#message").hide();

  var ans1 = $("#ans1");
  var ans2 = $("#ans2");
  var ans3 = $("#ans3");
  var ans4 = $("#ans4");

  ans1.removeAttr('disabled', 'disabled');
  ans2.removeAttr('disabled', 'disabled');
  ans3.removeAttr('disabled', 'disabled');
  ans4.removeAttr('disabled', 'disabled');
}

function updateScore(score){
    if (score != undefined || score != null) {
          $("#score").text(score);
    }
}

function updateMessage(message){
  $("#message").show();

  if (message != undefined || message != null) {
        $("#message").text(message);
  }
}

function updateCount(count){
  if (count != undefined || count != null) {
        $("#count").text(count);
  }
}

function checkValidUser(){
  var user = getCookie('validUser');

  if (user == null || user == undefined) {
    window.location = 'index.html';
  } else {
    $("#username").text(user);
  }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function eraseCookie(name) {
    setCookie(name, "", -1);
}

function logout(){
  eraseCookie('validUser');
  window.location = 'index.html';

}
