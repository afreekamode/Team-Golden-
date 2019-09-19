
const logMsg = document.getElementById("logMsg");
let userData = JSON.parse(localStorage.getItem("userData")) || [];//getting local storage data
let name;
let email;
let pass;

userData.map(profile => {
	name = profile.name;
	email = profile.email;
	pass = profile.pass;
	return logMsg.innerHTML = `<h2>${name}</h2>`;
 });