// Ternary Operator.
function checkSign(num) {

    return (num == 0) ? "Num is Zero" : (num < 0) ? "Num is Negative" : "Num is Positive";

}

var chec = checkSign(-10);
console.log(chec)