/*
5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically
 removing one letter from the end of the string and attaching it to the front.    
*/

let givenString = "pakistan"
let len = givenString.length
console.log(len)
let revString = ""
    for (let i = len - 1; i >= 0; i--) {
        revString = revString + givenString[i]
        // console.log(revString)
    }
    
    console.log(revString)