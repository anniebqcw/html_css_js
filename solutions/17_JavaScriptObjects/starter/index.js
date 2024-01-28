let darthVader = {
    allegiance : "Empire",
    weapon : "lightsabre",
    sith : true
}

console.log(`Allegiance: ${darthVader.allegiance}, Weapon: ${darthVader.weapon}, isSith: ${darthVader.sith}, Jedi: ${darthVader.jedi}`);

console.log(Object.keys(darthVader).length);

darthVader.children = 2;
darthVader.childNames = ["Luke", "Leia"];

for (let key in darthVader) {
    console.log(`${key}: ${darthVader[key]}`);
}

darthVader.allegiance = "The light side";
console.log(darthVader);
delete darthVader.children;
console.log(darthVader);

let{allegiance, weapon, sith, childNames} = darthVader;
console.log(allegiance, weapon, sith, childNames);

for (let key in darthVader) {
    delete darthVader[key];
}
console.log(darthVader);