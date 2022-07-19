// JS Objects
// self in python === this in javascript
let accord = {
    make: 'Honda',
    model: 'Accord',
    color: 'Blue',
    miles: 10000,
    driveCar: function(milesDriven) {
        this.miles += milesDriven
    }
}

let crv = {
    make: 'Honda',
    model: 'CRV',
    color: 'Green',
    miles: 5000,
    driveCar: function(milesDriven) {
        this.miles += milesDriven
    }
}

console.log(accord)

accord.driveCar(500)

console.log(accord)

// Constructor functions
function Car(make, model, color, miles) {
    this.make = make
    this.model = model
    this.color = color
    this.miles = miles

    this.driveCar = function(milesDriven) {
        this.miles += milesDriven
    }

    this.paintCar = function(newColor) {
        this.color = newColor
    }
}

let constructorAccord = new Car("Honda", "Accord", "Blue", 10000)
let constructorCRV = new Car("Honda", "CRV", "Green", 500)

console.log(constructorAccord)

constructorAccord.driveCar(500)

console.log(constructorAccord)

console.log(constructorCRV)

constructorCRV.driveCar(100)

console.log(constructorCRV)

constructorCRV.paintCar("Pink")

console.log(constructorCRV)
