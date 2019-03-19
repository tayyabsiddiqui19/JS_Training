let name
if (name === undefined) {
    console.log("Please provide the value")

} else {
    console.log(name)
}

//undefined function

let tempConvCelsius = function(farhenheit) {
   // let  c = (farhenheit - 32) * 5 / 9
   //  return c
   console.log(farhenheit)
}
let temp = tempConvCelsius()
console.log(temp)

/*
if (farhenheit === undefined) {
    console.log("PLease provide the value")
} else {
console.log(tempConvCelsius())
} 
*/

let square = function (num) {
    console.log(num)

}
let result = square()
console.log(result)
// num = undefined
//num = null