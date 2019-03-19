// 1. Write a JavaScript program that accept two integers and display the larger.

function greaterNumber(num1, num2) {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    if (num1 === num2) {
        console.log("Num1 is Equal to Num2")
    } else if (num1 < num2) {
        console.log("Num1 is Less than Num2")
    } else {
        console.log("Num1 is greater than Num2")
    }
}

let result = greaterNumber(7, 7)

// console.log(result)