// 1. Write a JavaScript program to display the current day and time in the following format.     

// Sample Output : Today is : Tuesday. 

let days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
let now = new Date()
let day = now.getDay()
console.log(`Today is : ${days[day]}.`)

// Current time is : 10 PM : 30 : 38

let hr = now.getHours()
let min = now.getMinutes()
let sec = now.getSeconds()


if (hr <= 11) {
    t = "AM"
} else {
    t = "PM"
}

if (hr > 12) {
    hr = hr - 12
}
console.log(`Current Time is : ${hr} ${t} : ${min} : ${sec} `)
