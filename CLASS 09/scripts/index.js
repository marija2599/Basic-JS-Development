
function firstExample(input) {
    let array = [];
    for (let i of input) {
        if (!!i) {
            array.push(i);

        }
    }
    return array;
}

let array2 = [2, NaN, 7, ['a', 'b', 'c'], null, "sedc", 0];

console.log(firstExample(array2))
