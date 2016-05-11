//script for validating username and password
function validateUser() {

    var username = $("#inputUsername").val();
    var password = $("#inputPassword").val();
    var errordiv =  $("#errorMessage");

    //Validate Username / Password Not Blonk
    if (username.length == 0 || password.length == 0) {
        errordiv.text("Error: Username/Password Cannot be Blank");
        errordiv.show();
        return false;
    } else {
        $.post("users/validate", {username: username, password: password}, function(result) {
          if (result == "Valid User"){
            setCookie('validUser', username, 1);
            window.location = "trivia.html";
          } else {
            errordiv.text("Error: Invalide Username/Password");
            errordiv.show();
            return false;
          }
        });
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
