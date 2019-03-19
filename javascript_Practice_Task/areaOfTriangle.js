/*
4. Write a JavaScript program to find the area of a triangle 
where lengths of the three of its sides are 5, 6, 7.     
*/
 
// Area of triangle when sides are given

let 
    a = 5, b =6, c = 7, s, $areaOfTriangle, areaOfTriangle
       
s = (a + b + c) / 2

$areaOfTriangle = Math.sqrt((s * (s -a) * (s - b) * (s - c)))
areaOfTriangle = $areaOfTriangle.toFixed(2)

console.log(`Area of Triangle w.r.t sides is : ${areaOfTriangle}`)

