// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Sample numbers : 3, -7, 2 
// Output : The sign is - 


function signofThreeNum(num1, num2, num3) {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    num3 = parseInt(num3)

    result = num1 * num2 * num3

    if (result < 0) {
        console.log("sign of product of three numbers is NEGATIVE '-' ");
    } else if (result > 0) {
        console.log("sign of product of three numbers is POSITIVE '+' ");
    } else {
        console.log("Product of three numbers is ZERO '0' ");
    }

    // return result

}

signofThreeNum(3, -2, 5)
// console.log(signofThreeNum(3, -2, 5))
