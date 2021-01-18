let firstHeader = document.getElementById("myTitle");
firstHeader.innerText = "This is the coolest page ever!";

let firstParagraph = document.getElementsByTagName("p")[0];
firstParagraph.innerText = "This exercise is pretty easy, right?";

let secondParagraph = document.getElementsByTagName("p")[1];
secondParagraph.innerText = "See? This can't be easier.";

//let secondHeader = document.getElementsByTagName("div")[2];
//secondHeader.innerText = "I changed this.";

let thirdDiv = document.getElementsByTagName("div")[2];
let secondHeader = thirdDiv.firstElementChild;
secondHeader.innerText = "I changed this."
let thirdHeader = thirdDiv.lastElementChild;
thirdHeader.innerText = "The End."
