// 3. Write a JavaScript program to get the current date.     
// Expected Output : 
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let now = new Date()

let d = now.getDate()
if(d >= 1 && d <= 9) {
    let dz = '0'  
    d = dz + d
} else {
    d = d
}

let m = now.getMonth()
 m = m + 1
  if(m >= 1 && m <= 9) {
    let mz = '0'  
     m = mz + m
           
} else {
    m = m
}

let y = now.getFullYear()

console.log(`${m}-${d}-${y}, ${m}/${d}/${y} or ${d}-${m}-${y}, ${d}/${m}/${y}`)
