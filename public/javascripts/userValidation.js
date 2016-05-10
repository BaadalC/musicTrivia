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
          alert (result);
          if (result == "Valid User"){
            window.location = "trivia.html";
          } else {
            errordiv.text("Error: Invalide Username/Password");
            errordiv.show();
            return false;
          }
        });
    }
}
