/* let car = {
    make: "bmw",
    model: "1234",
    year: 2018,
    getPrice: function () {

        return 5000;
    },
    printDescription: function () {
        console.log(this.make + " " + this.model);
    }
} */

/* function first() {
    return this;

}
console.log(first() === global)
 */
/* This is Node's global object
because that's where the
first method was called
 */
/* 
function second() {
    'use strict'
    return this

}

console.log(second() === global)
console.log(second() === undefined)

 */
/* 
 let myObject = { value : "My Obejct"}
 
 global.value = " Global Object"

function third() {
    return this.value
} 

console.log(third())

console.log(third.call(myObject))

console.log(third.call(myObject, "bob"))
console.log(third.apply(myObject, ["bob"])) */

function fifth () {
    console.log(this.firstName + "----" + this.lastName)

}

let customer1 = {
    firstName : " Tayyab",
    lastName : " Siddiqui",
    print : fifth
}
let customer2 = {
    firstName : " Bob",
    lastName : " Burger ",
    print : fifth
}

customer1.print()
customer2.print()