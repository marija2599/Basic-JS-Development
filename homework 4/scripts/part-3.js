
function textExample(input) {
    let text = "";
    for (let i in input) {
        text += (`${input[i]} `);


    }
    console.log(text);
    return text;

}

let firstExampleArray = ['Hello', 'from', 'SEDC!'];
let secondExampleArray = [1, 2, 3, 4];
let thirdExampleArray = ['John', 'Doe', 'is', 'not', 'a', 'real', 'person!'];

textExample(firstExampleArray);
textExample(secondExampleArray);
textExample(thirdExampleArray);