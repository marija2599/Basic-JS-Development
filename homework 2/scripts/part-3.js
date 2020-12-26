var year = prompt("Please enter the year you were born:");
var yearNumber = parseInt(year);
var zodiac = (yearNumber-4)%12;

if (zodiac == 0) {
    alert("You are a: Rat");
    console.log("You are a: Ra");
}
else if (zodiac ==1) {
    alert("You are a: Ox");
    console.log("You are a: Ox");
}
else if (zodiac ==2) {
    alert("You are a: Tigger");
    console.log("You are a: Tigger");
}
else if (zodiac ==3) {
    alert("You are a: Rabbit");
    console.log("You are a: Rabbit");
}
else if (zodiac ==4) {
    alert("You are a: Dragon");
    console.log("You are a: Dragon");
}
else if (zodiac ==5) {
    alert("You are a: Snake");
    console.log("You are a: Snake");
}
else if (zodiac ==6) {
    alert("You are a: Horse");
    console.log("You are a: Horse");
}
else if (zodiac ==7) {
    alert("You are a: Goat");
    console.log("You are a: Goat");
}
else if (zodiac ==8) {
    alert("You are a: Monkey");
    console.log("You are a: Monkey");
}
else if (zodiac ==9) {
    alert("You are a: Rooster");
    console.log("You are a: Rooster");
}
else if (zodiac ==10) {
    alert("You are a: Dog");
    console.log("You are a: Dog");
}
else  {
    alert("You are a: Pig");
    console.log("You are a: Pig");
}
