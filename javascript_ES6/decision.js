// If-else  statement

let count = 4

if (count === 3) {
    console.log("Count is 3")
} else if (count > 3) { // else  if statement
    console.log("Count is greater than 3")

} else if (count < 3) {
    console.log("Count is less than 3")

} else {
    console.log("Count is ", count)
}


// Case Switch

let hero = "superman"

switch (hero) {
    case "superman":
        console.log("You select superman");
        break;
    case "batman":
        console.log("You select batman");
        break;

    default:
        console.log("Not Matched");
}

// Note: use break statement; because if you don't use break, the code is executed in flow. 
// For Example: 
// If you select superman without including break statement in code.
// The output will be like this. 
// >You select superman
// >You select batman
// >Not Matched

// Ternary Operator

let  a = 1, b = "1"
let result = (a === b) ? "equal" : "inequal"
console.log(result)
