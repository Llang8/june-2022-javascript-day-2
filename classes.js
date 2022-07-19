class Car {
    // Like a python __init__
    constructor(make, model, color, miles=0) {
        this.make = make
        this.model = model
        this.color = color
        this.miles = miles
    }

    driveCar(milesDriven) {
        this.miles += milesDriven
    }
}

let accord = new Car("Honda", "Accord", "Blue")
console.log(accord)

accord.driveCar(500)

console.log(accord)

let crv = new Car("Honda", "CRV", "Orange", 10000)
console.log(crv)