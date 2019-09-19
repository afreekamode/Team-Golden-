const inputs = document.querySelector("input");
const username = document.getElementById("username");
const fullname = document.getElementById("fullname");
const saveDataBtn = document.getElementById("saveDataBtn");
const pass = document.getElementById("pass");
const pass2 = document.getElementById("pass2");
const email = document.getElementById("email");
let userData = JSON.parse(localStorage.getItem("userData")) || [];
const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

inputs.addEventListener("keyup", () => {
  saveDataBtn.disabled = !inputs.value;
});

saveData = e => {
  e.preventDefault();
  if(!email.value || !pass.value){
    alert ("Please input an email and Passwordw!");
    return false;
  }
  if(reg.test(email.value) == false){
    alert ("Please enter valid email!");
    return false;
  }
  if(pass.value == pass2.value){
  const profile = {
    pass: pass.value,
    email: email.value,
    name: fullname.value,
    username: username.value
  };

  userData.push(profile);
  localStorage.setItem("userData", JSON.stringify(userData));
  alert ("signup successfully!");
  window.location.assign("index.html");
}else{

alert ("Password not match!");
    return false;
  }
};