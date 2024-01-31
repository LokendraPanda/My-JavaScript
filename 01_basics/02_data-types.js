/* Datatypes:- JavaScript provides different data types to hold different types of values. 

There are two types of data types in JavaScript.

1) Primitive data type
2) Non-primitive (reference) data type

*/

// 1)Number  
// 2)Null    
// 3)String  
// 4)Symbol  
// 5)Boolean 
// 6)Bigint
// 7)Undefined 

let age = 30;  // Number datatype
console.log(age);

let myName = "Rocky"; // it's a string datatype
console.log(myName);

let isLoogedIn = true; // Boolean datatype
console.log(isLoogedIn);

// 2) Non-primitive (reference) data type

// 1)Object
// 2)Array
// 3)RegExp

/* The typeof Keyword:- We can use the JavaScript typeof operator to find the type of a JavaScript variable.
it actully tells us what is the data type that we have put within these () round bracket. */

//Example

console.log(typeof 30); // output => number
console.log(typeof "jocky"); // output => string
console.log(typeof true); // output => boolean
console.log(typeof undefined); // output => undefined
console.log(typeof null); // output => object note:- as per output
console.log(typeof {firstName:"looks", lastName:"noir"}); // output => object
console.log(typeof ["ford", "volvo", "BMW"]); // output => object