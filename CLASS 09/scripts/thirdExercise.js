let numbers = [5, 3, 7, 12, 54, 8];
let exampleArray = [34, 56, 7, 90, 2, "Hello", 12, true];


function arrayOfNumbers(array) {
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            console.log("Enter valid numbers");
        }
        if (array[i] % 2 == 0) {
            evenArray.push(array[i]);

        }
        else {
            oddArray.push(array[i]);

        }
    }
    return [evenArray, oddArray]
}


console.log(numbers)
console.log(arrayOfNumbers(numbers))
console.log(arrayOfNumbers(exampleArray))