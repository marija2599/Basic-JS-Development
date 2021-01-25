let animal = {
    name: prompt("Enter the name of the animal:"),
    kind: prompt("Enter the kind of the animal:"),
    speak: function () {
        console.log(`Animal name:  ${this.name}  \nAnimal kind:  ${this.kind}`);
        console.log(`${this.kind} ${this.name} says: "Dont't tell anyone, I was the one to pee in the hall."`);
    
    }
}

animal.speak()

