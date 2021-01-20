
let button = document.getElementsByTagName("input")[2];
let firstName = document.getElementsByTagName("input")[0];
let lastName = document.getElementsByTagName("input")[1];


button.addEventListener("click", greeting);

function greeting() {
    alert(`Hello ${firstName.value} ${lastName.value}. Welcome!`)
}

let mainDiv = document.getElementById("content");
mainDiv.addEventListener("mouseover", clearingContentFunction);

function clearingContentFunction() {
    firstName.value = "";
    lastName.value = "";
}