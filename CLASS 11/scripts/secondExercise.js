
let makeDeposit = parseInt(prompt("Please enter a deposit:"));
let withdrawMoney = parseInt(prompt("Enter the withdrawal amount:"));

function ATM(deposit, withdrawal, balance) {
    this.deposit = deposit;
    this.withdrawal = withdrawal;
    this.balance = balance
}


let example = new ATM(makeDeposit, withdrawMoney, 1000);

alert(`Your current balance is: ${example.balance} `);


function validateInputs() {
    if (!isNaN(makeDeposit) && !isNaN(withdrawMoney)) {
        let moneyWithDeposit = makeDeposit + example.balance;
        alert(`Your new balance is: ${moneyWithDeposit} `);
        if (withdrawMoney > moneyWithDeposit) {
            alert("Not enough money to widtdrawal!")
        } else {
            let balanceAfterWithdrawal = moneyWithDeposit - withdrawMoney;
            alert(`Money after the withdrawal: ${balanceAfterWithdrawal}`)
        }
    }

}
validateInputs()





