
let array = [3, 5, 6, 8, 11];
let array2 = [43, 5, 54, 213, 2];

function sumOfMinAndMax(input) {

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > max) {
            max = input[i];

        }


        if (input[i] < min) {
            min = input[i];
        }

        sum = max + min;


    }
    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
    console.log(`Sum: ${sum}`)
}

sumOfMinAndMax(array);
sumOfMinAndMax(array2);


//SECOND ATTEMPT




function minMaxSumFunction(input) {
    console.log('The largest number is:');
    let max = console.log(Math.max(...input));
    console.log('The smallest number is:');
    let min = console.log(Math.min(...input));

    let sum = input.reduce((a, b) => a + b);
    console.log(`The sum is: ${sum}`);

}

minMaxSumFunction([3, 45, 90, 135, 6]);
minMaxSumFunction([13, 145, 76, 34]);


