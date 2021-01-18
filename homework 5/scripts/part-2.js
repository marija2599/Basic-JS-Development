
let arr = [5, 2, 12];
let total = arr.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(total);


let title = document.getElementById("title");
title.innerText = "List of numbers"
let list = document.getElementById("listDiv");
list.innerHTML += `<li>${arr[0]}</li>`;
list.innerHTML += `<li>${arr[1]}</li>`;
list.innerHTML += `<li>${arr[2]}</li>`;

let paragraph = document.querySelector("p");
paragraph.innerText = `${arr[0]} + ${arr[1]} + ${arr[2]} = ${total}`;






