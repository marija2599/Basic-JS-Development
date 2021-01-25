function Pet(petName,petType,petAge,petOwner){
 this.name = petName;
 this.type = petType;
 this.age = petAge;
 this.isHealthy = true;
 this.owner = petOwner;
 this.isAdopted = function(){
     if(this.owner == true){
         return this.owner;
     }
     else{
         return false;
     }
 }
}

function Person(name,surname,years){
    this.firstname = name;
    this.lastName = surname;
    this.age = years;
}


let firstPet = new Pet("Baron","Dog",1,"Anna");
let secondPet = new Pet("Lui","Cat",3,"Jack");
let thirdPet = new Pet("Ben","Dog",6);
let fourthPet = new Pet("Roxy","Hamster",2,"Anna");

let firstOwner = new Person("Anna","Milton",31)

let pets = [firstPet,secondPet,thirdPer,fourthPet];
let people = []