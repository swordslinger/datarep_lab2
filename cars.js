class Vehicle {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }




    Information() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }



}


class Cars extends Vehicle{
    constructor(make,model,year,doors){
        super(make,model,year);
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log(`doors: ${this.doors}`)
    }

}
let myCar = new Cars("fiat","500",2018,4)
myCar.Information();