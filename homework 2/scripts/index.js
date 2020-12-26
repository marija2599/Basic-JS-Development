var number1 = prompt("Enter first number:");
var firstNumber = parseInt(number1)

var number2 = prompt("Enter second number:");
var secondNumber = parseInt(number2)

var number3 = prompt("Enter third number:");
var thirdNumber = parseInt(number3)

var number4 = prompt("Enter forth number:");
var forthNumber = parseInt(number4)

var number5 = prompt("Enter fifth number:");
var fifthNumber = parseInt(number5)


if (firstNumber > secondNumber && firstNumber > thirdNumber && firstNumber > forthNumber && firstNumber > fifthNumber) {
    alert(firstNumber);
}
else if (secondNumber > firstNumber && secondNumber > thirdNumber && secondNumber > forthNumber && secondNumber > fifthNumber) {
    alert(secondNumber);
}
else if (thirdNumber > firstNumber && thirdNumber > secondNumber && thirdNumber > forthNumber && thirdNumber > fifthNumber) {
    alert(thirdNumber);
}
else if (forthNumber > firstNumber && forthNumber > secondNumber && forthNumber > thirdNumber && forthNumber > fifthNumber) {
    alert(forthNumber);
}
else {
    alert(fifthNumber);
}

