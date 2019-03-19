/* Write a JavaScript conditional statement to sort three numbers.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1  */

function sortNum(num1, num2, num3) {

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    num3 = parseInt(num3)

    numArr = [];
numArr.push(num1,num2,num3)
console.log(numArr)
sortingNum = numArr.sort()
console.log(sortingNum)
}

sortNum(4, -9, -99)




// function sortNumber(a,b) {
//     return b - a;
// }

// // var numArray = [140000, 104, 99];
// numArray.sort(sortNumber);
// console.log(numArray.join(","));