var today = new Date()
var doomsDay = new Date("June 30, 2035")

var msToday = today.getTime()
var msDoomsDay = doomsDay.getTime()

var msDiff = msDoomsDay - msToday
console.log(msDiff)

var dayDiff = msDiff / (1000 * 60 * 60 * 24);
dayDiff = Math.floor(dayDiff)
console.log(dayDiff)