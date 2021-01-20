let button = document.querySelector("input");
let table = document.querySelector("table");
let tdata = document.querySelectorAll("td");

button.addEventListener("click", row)

function row() {
    table.innerHTML += `<tr><td>New Row Cell</td><td>New Row Cell</td></tr>`;
}



