/*

function sayHello() {
    //Body of function
    console.log("Hi, I'm function")
}
//function invoke
sayHello()
// Invoke function through variable
let a = sayHello;
a()
a()
a()

*/
// Giving parameter
function sayHello(name) {
    //Body of function
    console.log("Hi, I'm" + name)
}

sayHello("Tayyab")

// Return value of function
// Its return the value which is processed by the function

function calculateTax(amount) {
    let result = amount * 0.025
    return result
}
let tax = calculateTax(100)
console.log(tax)

// Another Representation

let tax1 = calculateTax
console.log(tax1(100))
