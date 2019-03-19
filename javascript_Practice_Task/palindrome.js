/*
2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, 
e.g., madam or nurses run.
*/
function inputFromUser(input) {
    input = input + ""
    let strSplit = input.split(" ")
    console.log(strSplit)
    strSplit = strSplit.join("")
    console.log(strSplit)
    let input1 = strSplit.slice(0)
    let array = []
    for (let i = strSplit.length - 1; i >= 0; i--) {
        array.push(strSplit[i])
        console.log(array)
    }
    array = array.join("")
    let str = input.split(" ").join("")
    if (str === array) {
        console.log("Its a palindrome")
    } else {
        console.log("Its not a palindrome")
    }

}
inputFromUser("m  o m")
