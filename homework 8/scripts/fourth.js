$(document).ready(function () {

    let firstNumber = parseInt(prompt("Enter first number:"));
    let secondNumber = parseInt(prompt("Enter second number:"));
    let thirdNumber = parseInt(prompt("Enter third number:"));

    let average = 0;
    function printTheAverage(a, b, c) {
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            $("#averageHeader").text("Please enter valid numbers!").css("color","black");
            
        }
        else {
            average = (firstNumber + secondNumber + thirdNumber) / 3;
            $("#averageHeader").text(average);


        }
    }

    function averageColor(x) {
        if (x >= 10) {
            $("#averageHeader").css("color", "green");

        }
        else{
            $("#averageHeader").css("color", "red");
        }
       
    }


    printTheAverage(firstNumber, secondNumber, thirdNumber);
    averageColor(average);






})
