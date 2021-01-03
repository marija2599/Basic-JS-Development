var pin = prompt("Please enter pin:");
console.log(`Your pin is: ${pin}`)
function atm() {
    let current = 23570;
    alert(`Your current ammount is: ${current}`);
    confirm("Would you like to withdraw money:");
    let cash = prompt("Please enter the ammount:");
    let leftCash = current - cash;
    if (cash > 23570) {
        alert("Not enough money");
    }
    else if (cash <= 0) {
        alert("ERROR");
    }
    else {
        alert("Please take your card and money");
        alert(`You have ${leftCash} left`);
        alert("Thank you for choosing us!");
    }

}
atm()