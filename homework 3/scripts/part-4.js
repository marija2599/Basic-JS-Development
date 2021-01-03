function team(girls,boys) {
if (girls<10 && boys<10) {
console.log(`Girls: 0${girls} Boys: 0${boys}`);
}
else if (girls<10 && boys>=10) {
    console.log(`Girls: 0${girls} Boys: ${boys}`);
}
else if (girls>=10 && boys<10) {
    console.log(`Girls: ${girls} Boys: 0${boys}`);
}
else {
    console.log(`Girls: ${girls} Boys: ${boys}`);
}
}

team(3,6);
team(12,9);
team(8,15);
team(10,17); 




