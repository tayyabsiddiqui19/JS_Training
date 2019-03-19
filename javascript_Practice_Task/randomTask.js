/*
7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.     
new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/

for (let year = 2014; year <= 2050; year++) {
    const d = new Date(year, 0);
    if (d.getDay() === 0) {
        console.log(`1st January ${year} ==> SUNDAY `);
    } else {
        console.log(`1st January ${year} ==> NOT SUNDAY `);
    }
}
