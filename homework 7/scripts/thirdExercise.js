

let button = document.getElementById("button");
let firstName = document.getElementsByTagName("input")[0];
let lastName = document.getElementsByTagName("input")[1];
let age = document.getElementsByTagName("input")[2];





let students = [];
function Student(fName, lName, howOld) {
    this.name = fName.value;
    this.surname = lName.value;
    this.years = howOld.value;
    this.studentData = function () {
        return `${this.name} ${this.surname} - ${this.years}`;
    }

}


button.addEventListener("click", function () {
    let student = new Student(firstName, lastName, age);
    students.push(student);
    console.log(students);
})













































