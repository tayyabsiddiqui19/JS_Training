// Function expression 
/*
function () {
    
}
*/

// Function Declaration
/*

function name(params) {
    
}

*/
/*
setTimeout(function () {
    console.log("I waited fr 2 second")
}, 2000)


// Function can be taken as a function as a parameter

let counter = 0;
function timeOut() {
    setTimeout(function () {
        console.log("Hi" + counter++)
        timeOut()
    }, 2000)

}

timeOut()


*/

// Immediately Invoked function
(function () {
    console.log("Immediately Invoked Functions")
})();
