// Coercion is used to force the datatype of variable to convert into different datatype.
// In this variable a is force to convert its datatype and concatenate with a string.

let a = 5;
let b = '6'
let z = a + b;
console.log(z)

// Convert variable b into integer form

b = parseInt(b, 10)
z = a + b;
console.log(z)

// Another datatype NaN = Not a Number

let d = parseInt("tayyab", 10)
console.log(d)

let e = isNaN(d);
console.log(e)