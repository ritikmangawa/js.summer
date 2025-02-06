const accountId = 1445533
let accountEmail = "rk@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

let accountSate;  //undifined variable

//accountId = 2  you can not change const keyword 
// so this is not allowed


accountEmail = "rc@google.com"
accountPasword = "21212121"
accountCity = "sikar"
//in js two method for declared variable one is let and second is let in let scope problem is solved
// prefer not to use var
// because of issue in block scope and functional scope
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity ])