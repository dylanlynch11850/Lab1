//Class is vehicles
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //Method to do some work 
    information() {
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }
}

//Let statemnets 
let myVehicle = new Vehicle('VW', 'Golf', 2022);
myVehicle.information();

//this is the constructor, extending the function of vehicle class with super
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    //write a new method called informastion but add doors
    information() {

        //Super is new concept 
        super.information();
        console.log(`Doors: ${this.doors}.`)
    }
}

//Assign to memory 
let myCar = new Car(`VW`, 'Golf', 2010, 5);
myCar.information();