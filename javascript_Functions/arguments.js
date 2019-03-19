// Multiple arguments in functions

let add = function(a, b, c) {
    return a - b - c;
}
let result = add(1, 2, 3)
console.log(result)

let getScoreText = function(name = "Anonymous ", score = 0) {
   // console.log(name)
    //console.log(score)
    return "Name: " + name + "Score: " + score
}
console.log(getScoreText(undefined, 90))
