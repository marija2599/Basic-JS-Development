
let input = parseInt(prompt("Enter your weight in kg:"));
let result = 0;
function weightInChickens() {
    if (Number.isInteger(input) && input > 0) {
        result = input * 2;
        console.log(result);
        return result;

    }
    else {
        console.log("Error, please enter number!");
        return null;
    }
}

weightInChickens();

let header = document.getElementById("header");
header.innerText = "WEIGHT CALCULATOR IN CHICKENS";

let paragraph = document.querySelector("p");
paragraph.innerText = `Your weight in chickens is ${result}.`;


