function OnSubmit() {
  let first_name = document.getElementById("first_name");
  let last_name = document.getElementById("last_name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let sin = document.getElementById("sin");
  let div = document.getElementById("error");
  div.innerHTML = "";

  if(first_name.value.length > 50) {
      div.innerHTML += "<br/>First name must be less than 50 characters.";
  }

  if(first_name.value.length < 1) {
      div.innerHTML += "<br/>First name must be greater than 1 character.";
  }

  if(last_name.value.length > 50) {
     div.innerHTML += "<br/>Last name must be less than 50 characters.";
  }

  if(last_name.value.length < 1) {
      div.innerHTML += "<br/>Last name must be greater than 1 character.";
  }

  if (!email.value.includes('@') || !email.value.includes('.')) {
    div.innerHTML += "<br/>Invalid email format.";
  }

  if(password.value.length > 50) {
     div.innerHTML += "<br/>Password must be less than 50 characters.";
  } 

  if(password.value.length < 7) {
      div.innerHTML += "<br/>Password must be greater than 7 characters.";
  }

  if(sin.value.length != 9) {
      div.innerHTML += "<br/>SIN must be 9 characters.";
  }

  if (isNaN(sin.value)) {
    div.innerHTML += "<br/>SIN must be all numbers.";
  }
}

  module.exports = { OnSubmit };