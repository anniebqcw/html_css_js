// type code below:
let numTest = 45.324568;
console.log(numTest);

let twoDecNum = numTest.toFixed(2);
console.log(twoDecNum);

let stringTest = `I am the very model of a modern major general`;
stringTest = stringTest.toUpperCase();
let indexOfM = stringTest.indexOf(`M`);
console.log(indexOfM);

let start = stringTest.indexOf("MODEL");
let end = stringTest.lastIndexOf('MAJOR');

let subString = stringTest.substring(start, end);
console.log(subString);

document.write("<p>" + subString + "</p>");