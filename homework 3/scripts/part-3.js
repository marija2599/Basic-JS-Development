function dogAge() {
    let dog = parseInt(prompt("Enter your dog's age:"));
    let calculatedAge = dog * 7;
    alert(`Your dog's age in human years is: ${calculatedAge}`);
}
dogAge();


function humanAge() {
    let human = parseInt(prompt("Enter your dog's age with human years: "));
    let dogsAge = human / 7;
    dogsAge = parseInt(dogsAge);
    alert(`Your dog's age is NN years is: ${dogsAge}`);
}
humanAge();