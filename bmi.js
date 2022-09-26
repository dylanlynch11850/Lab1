class BMI {
    // this is where date is iniatiued in the class
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;

    }

    // this is where it is being calculated
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;

    }
}

// this is the let statements
let myBMI = new BMI(2, 100);
let result = myBMI.calculateBMI();
console.log(result);