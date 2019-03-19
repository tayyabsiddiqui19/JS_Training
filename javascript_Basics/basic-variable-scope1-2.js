//varOne = Global Scope
//varTwo = Local Scope
//varThree = Local Scope
//varFour = Local Scope


let varOne = "varOne"

if (true) {
    console.log(varOne)
    let varTwo = "varTwo"
    console.log(varTwo)
    if(true) {
        let varThree = "varThree"
        console.log(varThree)
        if(true) {
            let varFour = "VarFour"
            console.log(varFour)
        }
    }
}

console.log(varTwo)
console.log(varThree)
console.log(varFour)

