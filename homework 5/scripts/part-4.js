let input = prompt("Enter your recipe name:");
alert("Please enter 5 ingredients")
let firstIngredient = prompt("Enter first ingredient:");
let secondIngredient = prompt("Enter second ingredient:");
let thirdIngredient = prompt("Enter third ingredient:");
let forthIngredient = prompt("Enter forth ingredient:");
let fifthIngredient = prompt("Enter fifth ingredient:")

let title = document.querySelector("h1").innerText = `Recipe: ${input}`;
let secondDiv = document.getElementsByTagName("div")[1];


let listItems = secondDiv.innerHTML = `<li>${firstIngredient}</li> <li>${secondIngredient}</li> <li>${thirdIngredient}</li> <li>${forthIngredient}</li> <li>${fifthIngredient}</li>`;
