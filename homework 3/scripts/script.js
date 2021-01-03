var yearOfBirth = parseInt(prompt("Enter your year of birth:"));
var zodiac = (yearOfBirth - 4) % 12;

switch (zodiac) {
    case 0:
        alert("You are a Rat");
        break;

    case 1:
        alert("You are a Ox");
        break;

    case 2:
        alert("You are a Tiger");
        break;

    case 3:
        alert("You are a Rabbit");
        break;

    case 4:
        alert("You are a Dragon");
        break;

    case 5:
        alert("You are a Snake");
        break;

    case 6:
        alert("You are a Horse");
        break;

    case 7:
        alert("You are a Goat");
        break;

    case 8:
        alert("You are a Monkey");
        break;

    case 9:
        alert("You are a Rooster");
        break;

    case 10:
        alert("You are a Dog");
        break;

    case 0:
        alert("You are a Pig");
        break;

    default:
        alert("Invalid number");
        break;


}
