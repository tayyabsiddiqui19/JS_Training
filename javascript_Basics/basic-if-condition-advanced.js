/*let isAccount = false;

if (isAccount){
    console.log("Account is locked")
} else {
    console.log("Welcome to our Service")
}
*/
let isAccountLocked = false
let userRole = "admin"

if(isAccountLocked) {
    console.log("Account is Locked")
} else if(userRole === "admin1") {
    console.log("Welcome Admin")
} else {
    console.log("Welcome User")
}
