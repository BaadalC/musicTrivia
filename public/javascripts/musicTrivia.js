function registerUser(){

    var username = $("#username").val();
    var name = $("#name").val();
    var emailaddress= $("#exampleInputEmail1").val();
    var password= $("#password").val();
    var confPassword=$("#confirmpass").val();

    if (password==confPassword){
      createNewUser(username, name, emailaddress, password);
    }
    else{
      alert("Passwords Donot Match");
      return false;
    }

}

function createNewUser(_username, _name, _email, _password){

  if (_username == null || _name == null || _email == null || _password == null){
    return
  }else {
    $.post("users", {
      //passing param values
      username: _name,
      name: _username,
      email: _email,
      password: _password
    })
    .done(function(){
      alert("Called");
    })
    .success(function(){
      alert("Success");
    });
  }
}
