/*
3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog' 
Expected Output : d,do,dog,o,og,g 
 */

// function generateString(input) {
//     input = input + ""
//     let strSplit = input.split("")
//     console.log(strSplit)
//     for(let i = 0; i >= strSplit.length; i++) {
//         console.log(strSplit)
//     }

// }
// console.log(strSplit)
// generateString("zumi");


//Write a JavaScript function that generates all combinations of a string.
function substrings(str1) {
    var array1 = [];
    for (var x = 0, y = 1; x < str1.length; x++ , y++) {
        array1[x] = str1.substring(x, y);
    }
    var combi = [];
    var temp = "";
    var slent = Math.pow(2, array1.length);

    for (var i = 0; i < slent; i++) {
        temp = "";
        for (var j = 0; j < array1.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += array1[j];
            }
        }
        if (temp !== "") {
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}

substrings("zu");
