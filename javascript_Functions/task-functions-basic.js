let tempConvCelsius = function(farhenheit) 
{
    let  c = (farhenheit - 32) * 5 / 9
     return c
}

console.log(tempConvCelsius(10))

let tempConvKelvin = function(farhenheit){
    let k = (farhenheit + 459.67) * 5 / 9
    return k
}
console.log(tempConvKelvin(10))
