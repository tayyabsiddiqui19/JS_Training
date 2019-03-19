var counter = (function () {
    //private stuff, varaible 

    let count = 0
    function print(message) {
        console.log(message + '... ' + count);
    }
    // return an object
    return {
        // value : count,
        get: function () {
            return count;
        },
        set: function (value) {
           return count = value
        },
        increment: function () {
            count += 1;
            print("After increment: ");
        },
        reset: function () {
            print("Before reset: ")
            count = 0
            print("After reset: ")
        }
    }


})();
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.get())
//console.log(counter.count) //Return nothing

// Accidently created a Closure.
// console.log(counter.value)
counter.set(7)
console.log(counter.get())

counter.reset()
