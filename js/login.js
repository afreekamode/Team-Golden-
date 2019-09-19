
let userData = JSON.parse(localStorage.getItem("userData")) || [];//getting local storage data
let name;
let email;
let pass;
let attempt = 3; // Variable to count number of attempts.

userProfile = () => { userData.map(profile => {
	name = profile.name;
	email = profile.email;
	pass = profile.pass;
	return;
 });
};

// Below function Executes on click of login button.
validate = e => {
e.preventDefault();
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
userProfile();
 if(!username){
    alert ("Please input an email and Password!");
    return false;
  }
if ( username == email && password == pass){
	alert ("Login successfully "+name);
	window.location.assign("success.html"); // Redirecting to other page.
}
else{
const error = document.getElementById('errorLog');
attempt --;// Decrementing by one.
error.innerHTML = `<p style="color:red;font-size:.8em;">Wrong login detailes entered! <br>You have left ${attempt} attempt</p>`;

// Disabling fields after 3 attempts.
if( attempt == 0){
	username.disabled = true;
	password.disabled = true;
	document.getElementById("submit").disabled = true;
	return false;
		}
	}
};