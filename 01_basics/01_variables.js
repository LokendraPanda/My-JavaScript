// Variables:- Variables are containers for storing data (means it's storing the Information into the containers.)
// JavaScript Variables can be declared in 4 ways:- Automatically 2) using var, 3) let & 4) Const 
// Example

const accountId = 12369;
let accountEmailId = "jain325@gmail.com";
var accountPassword = 258789;
accountCity = "Mumbai"; // always declare variables using let or const (use const if the value can not be change & use let if the value will be change)
let accountState; // in JavaScript if you declare variable without value it will not give error insted it will print the "undefined".  

// accountId = 16547;

accountEmailId = "jaggu693@yahoo.com";
accountPassword = 159753;
accountCity = "Pune";

console.log(accountEmailId, accountPassword, accountCity);
console.table([accountEmailId, accountPassword, accountCity, accountState]);

/* Note:- do not use var keyword cause issue in block and functional scope so always use let & const keywords to declare variables */