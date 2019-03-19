let a = "first"
function scopeTest() {
    console.log(a)
let b = "inner scope"
}

scopeTest()
console.log(b)

// If something outside of the scope, it can be called.
// But if something is declared inside the scope. it will not be called outside.


