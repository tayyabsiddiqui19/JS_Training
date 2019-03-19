
/* 
6. Write a JavaScript program to determine whether a given year is a leap year in the 
Gregorian calendar.     
Algorithm
function isLeapYear (year):
if ((year modulo 4 is 0) and (year modulo 100 is not 0))
or (year modulo 400 is 0)
then true
else false
*/
                            

let leapyear = function isLeapYear (year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(`Your entered ${year} Year is LEAP YEAR `) 
    } else {
        console.log(`Your entered ${year} Year is NOT LEAP YEAR `) 
    }
return year
}
let ly = leapyear(2020)