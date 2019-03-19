/*
1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223    
*/


function reverseNum(x) {
    let num = "" + x
    let arrayNum = num.slice(0)
    let array2 = []
    for (let i = arrayNum.length - 1; i >= 0; i--) {
        array2.push(arrayNum[i])
        //   console.log(array2)
    }
    array2 = array2.join("")
    return array2
}

console.log(reverseNum(12345))
