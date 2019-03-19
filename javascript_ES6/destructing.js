let a,b,c,d,e;

let names = [ "tayyab", "siddiqui", "bob", "sam", "david" ];

/* [a,b,c,d,e] = names

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
 */


 let others;
 [a,b,...others] = names

 console.log(a)
 console.log(b)
 console.log(others)



 let years, model;
 ({year, model} = {
     model: "745li",
     year : 2000,
     manu: "BMW"
 })

 console.log(year)
 console.log(model)
 