var text = "World War II"
for(var i = 0; i< text.length; i++) {
    if(text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, 1) + "the Second World War " + text.slice(i + 12)
    }
    console.log(text)
}
console.log(text)