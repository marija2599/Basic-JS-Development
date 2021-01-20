let button = document.getElementsByTagName("input")[4];
let firstName = document.getElementsByTagName("input")[0];
let lastName = document.getElementsByTagName("input")[1];
let email = document.getElementsByTagName("input")[2];
let password = document.getElementsByTagName("input")[3];
let myDiv = document.getElementById("myDiv");
let inputs = document.querySelectorAll("input");


button.addEventListener("click", addStringFunction);



function addStringFunction() {
    let data = [firstName.value, lastName.value, email.value, password.value];
    myDiv.innerHTML += `<p> <strong>First name:</strong> ${data[0]};  <strong>Last name:</strong> ${data[1]};  <strong>Email:</strong> ${data[2]};   <strong>Password:</strong> ${data[3]}`;

}




