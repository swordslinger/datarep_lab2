class BMI {
    constructor(weightKG, heightM) {
        this.weightKG = weightKG;
        this.heightM = heightM;
    }




    calculateBMI() {
        let bmi = this.weightKG / (this.heightM ** 2);
        return bmi;
    }



}

let MyBmi = new BMI(90,2)
let CalculatedBMI = MyBmi.calculateBMI();
console.log(CalculatedBMI);