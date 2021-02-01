
let emptyArray = [];


function evenOddNumbers(array) {
    for (let i = 1; i < array.length; i++) {
        if (isNaN(array[i])) {
            console.log("Enter numbers!!")
            
        }
      
        if ((array[i - 1] % 2 === 0) && (array[i] % 2 === 0)) {
            emptyArray.push('-', array[i])


        }
        else{
            emptyArray.push(array[i])
        }


    }

    console.log(emptyArray);
}


evenOddNumbers([2, 13, 22, 4, 15, 6])







