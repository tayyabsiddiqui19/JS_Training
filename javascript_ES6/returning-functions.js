/*
// Don't Do This

var myVaraible = "I am in Global Scope"

// Either too

var function myFunction() {
    console.log("mee too")
}
*/

// function one() {
//     return "one"
// }

// let value = one
// // console.log(value)
// console.log(typeof value)

function two() {
    return function () {
        console.log("two")
        return function () {
            console.log("three")
            return function () {
                console.log("four")
                return "Done"
            }
        }
    }
}
// let func = two() 
console.log(two()()()) // To invoke the returning function use "Function invokation operator."