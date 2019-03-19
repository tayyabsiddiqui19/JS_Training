// Making function of time;
let tellTime = function() {

    var now = new Date()
    var theHr = now.getHours()
    var theMin = now.getMinutes()
    var theSec = now.getSeconds()
    console.log(`Time: ${theHr} Hours : ${theMin} Mins : ${theSec} Secs`)
}
//tellTime()

let greetUser = "Hi, I'm Here"
let greetings = function(greet) {
    console.log(greet)
}
//greetings(greetUser)

for(let i = 0; i<=100000000 ; i++) {
    tellTime()
    greetings(greetUser)
}
