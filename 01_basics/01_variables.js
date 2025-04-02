const accountId = 12345
let accountEmail = "hello12@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;
//accountId = 23 //not allowed

accountEmail = "abc.com"
accountPassword = "54321"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail,accountPassword,accountCity]);