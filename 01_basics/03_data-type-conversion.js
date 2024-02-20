/* Data-Type Conversion/Operation:- In JavaScript, data types are used to classify one particular type of data, determining the values that you can assign to the type and the operations you can perform on it. 
Although due to type coercion, JavaScript will automatically convert many values, it is often best practice to manually convert values between types in order to achieve expected results.
*/

// With the String() function, let’s convert a Boolean value to a string by passing the value true into the parameters for String().

let godName = String(true);
console.log(godName);

// Alternatively, we can pass a number into the function.

let convertingNumberToString = String(50);
console.log(convertingNumberToString);

/* 2) Converting Values To Numbers:- When converting values to a number data type, we’ll use the Number()method. 
Primarily, we’ll be converting strings of numerical text to numbers, but we can also convert Boolean values.
*/

let convertingStringValuesToNumber = Number("100")
console.log(typeof convertingStringValuesToNumber);

let stringOfWhiteSpace = Number(" ");
console.log(stringOfWhiteSpace);

/* 3) Converting Values To Booleans:- To convert numbers or strings to Boolean values, the Boolean() method is used. 
This can be useful for determining whether a user entered data into a text field or not */

// Any value that is interpreted as empty, like the number 0, an empty string, or values that are undefined or NaN or null are converted to false.

let valueZeroToBoolean = Boolean(0);
console.log(typeof valueZeroToBoolean);  // output => false

let emptyStringToBoolean = Boolean("");
console.log(typeof emptyStringToBoolean); // output => false

let undefinedToBoolean = Boolean(undefined);
console.log(typeof undefinedToBoolean);  // output => false

/* Other values will be converted to true, including string literals composed of white space.

Boolean(2000);		// output =>  true
Boolean(" ");		// output =>  true
Boolean("Maniacs");	// output =>  true

*/

let numberToBoolean = Boolean(2000);
console.log(numberToBoolean); // output => true

let whiteSpaceStringToBoolean = Boolean(" ");
console.log(whiteSpaceStringToBoolean); // output => true

let stringToBoolean = Boolean("roger");
console.log(stringToBoolean); // output => true

// Note:- The "0" as a string literal will convert to true since it is a non-empty string value.

let zeroStringToBoolean = Boolean("0");
console.log(zeroStringToBoolean);  // output => true