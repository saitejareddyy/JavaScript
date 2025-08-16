const accountId = 123456;
let name = "Saiteja Reddy";
var amount = 69;
manager_name = "Mallesh"


// const => we can`t change the value inside the const
// let is a block scope variable
//var is a functional scope variable

accountId = 45632 // throws error, declared by const 
console.log(accountId);


{
  let my_name = "Raju"
  console.log(my_name)
}

console.log(my_name)