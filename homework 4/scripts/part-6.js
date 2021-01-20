let fNames = ["Alex", "Tony", "Anthony", "Anna"];
let lName = ["Bay", "Daglass", "Dunn", "Klerk"];
let numbers = [1, 2, 3, 4];

function fullNameFunction(firstName, lastName, numberss) {
    let fullName = [];
    for (let i = 0; i < fNames.length; i++) {
        fullName.push(`${numbers[i]}. ${fNames[i]} ${lName[i]}`);
    }
    return fullName;
}

let data = fullNameFunction(fNames, lName);
console.log(data)