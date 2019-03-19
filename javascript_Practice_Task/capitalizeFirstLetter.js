/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox' 
Expected Output : 'The Quick Brown Fox '
 */

function upperCase(str) {
    let words = str.split(" ")

    console.log(words)
    for (i = 0; i < words.length; i++) {

        console.log("words[i]: ", words[i])

        let firstChar = words[i][0]
        console.log("firstChar: ", firstChar)

        firstChar = firstChar.toUpperCase()
        console.log("firstChar: ", firstChar)

        words[i] = firstChar + words[i].slice(1)

    }
    console.log(words)

}

upperCase("i am tayyab")