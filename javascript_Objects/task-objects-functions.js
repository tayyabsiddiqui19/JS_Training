let farhenheitValue = {
    value: 1
}
let tempConvC = function(farhenheit) {
    let c = (farhenheit - 32) * 5 / 9
    return {
        celsius: `Temperature in Celsius = ${c}`
    }
}
let tempConvK = function(farhenheit){
   let k = (farhenheit + 459.67) * 5 / 9 
   return {
       kelvin: `Temperature in Kelvin = ${k}`
   }
}

let celValue = tempConvC(farhenheitValue.value)
let kelValue = tempConvK(farhenheitValue.value)
console.log(celValue.celsius)
console.log(kelValue.kelvin)



