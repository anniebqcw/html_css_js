// Aritmetic Operators
console.log(5 + 5); //10
console.log(5 * 10); //50
console.log(10 % 3); //1
console.log(5 + 10 / 2 * 5 - 10); //20
console.log((6 + 10) / 2 * 5 - 10); //30

// Assignment Operators
let x = 1;
console.log(x = x + 1); //x hasn't been declared tho? x = 2
console.log(x+= 1); //3
console.log(x++); //3
console.log(++x); //5 

// Relational Operators
console.log(5 > 3); //true
console.log(3 != 3); //false
console.log(3 <= 2 && 5 >2); //false
console.log(!5>3); //false

// Mismatched Types
console.log(5 + "5"); //55 -can concatenate strings
console.log(5 + true); //6
console.log(5 * "5"); //25 parse the string to 5 as * is arithmetic, and it is possible to use type conversion on "5" ? aka * cant be used on strings, so it tries to convert before error
console.log(1 == true); //true
console.log(1 === true); //false

