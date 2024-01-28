let quote = ["I", "am", "your", "friend"];

console.log(quote);
console.log(quote.indexOf("your"));
console.log(quote[2]);
quote.pop();
console.log(quote);
quote.push("father");
console.log(quote);
quote.unshift("Luke");
console.log(quote);

let erroneousWord = "Luke";
let lukeIsHere = quote.find(n => n === erroneousWord);
let lukeIsAt;

if (lukeIsHere) {
    lukeIsAt = quote.findIndex(n => n === erroneousWord);
    quote[lukeIsAt] = "No";
}

console.log(quote);


let output = "";
for(let i = 0; i < quote.length; i++) {
    // output += (quote[i] === quote.length - 1) ? `${quote[i]}!` : (quote[i] === "No") ? `${quote[i]}, ` : `${quote[i]} `;

    if (quote[i] === quote.length - 1) {
        output += `${quote[i]}!`;
    } else if (quote[i] === "No") {
        output += `${quote[i]}, `;
    } else {
        output += `${quote[i]} `;
    }

    switch(quote[i]) {

    }
}
let array = [,,,,];

console.log(array.length);
array = array.fill();
console.log(array.length);