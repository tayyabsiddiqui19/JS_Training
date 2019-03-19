let car = {
    make: "bmw",
    model: "1234",
    year: 2018,
    getPrice: function () {

        return 5000;
    },
    printDescription: function () {
        console.log(this.make + " " + this.model);
    }
}
car.printDescription()
console.log(car.getPrice())

console.log(car['year'])

console.log(car[1]) // Undefined


// Insert property

let anotherCar = {}
anotherCar.whatever = "Tayyab"
console.log(anotherCar.whatever)


// Nested Properties :) 

let a = {
    myProperty: {
        b: "b"
    }
}

console.log(a.myProperty.b)


// Objects in Array

var x = {
    myArray: [
        {
            d: "this"
        },
        {
            e: "that"
        },
        {
            f: "crazy"
        }
    ]
}

console.log(x.myArray[1])