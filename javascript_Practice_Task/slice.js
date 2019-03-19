var str = "World War II"
var numChar = str.length
console.log(`${numChar} characters`)
for (var i = 1; i < numChar; i++) {
    if (str.slice(i, i + 12) === "  ") {
        console.log("Double Spaces are not allowed")
    }
}

var ss = str.slice(0,2)
console.log(ss)