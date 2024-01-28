let x = 2;

for (let loopCounter = 3; x < 10000; loopCounter--) {
    x = x ** 2;
    console.log(`x: ${x} loopCounter ${loopCounter}`);
}