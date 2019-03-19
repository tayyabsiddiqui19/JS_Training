let a = [4, 8, 1, 9, 6, 5 ]
let b = ["cat", "dog", "animals", "snake" ]
console.log(a[0])
console.log(b[1])
console.log(a,b)

// Calling random index 
a[0] = 7
console.log(a)

//Data Type of Array = Object
console.log(typeof a)

// Array handle different type of data types.
let c = ["tayyab", 6, true]
console.log(c)

// undefined index
console.log(a[9])

// Find the lenght of array elements
console.log(a.length)

// Empty elements inside the array.
a[12] = 99
console.log(a)
console.log(a.length)

// Push Function = Add element END of the array
a.push("JS")
console.log(a)

// Pop Function = Remove elements END of the array.
a.pop()
a.pop()
a.pop()
console.log(a)



