let hanSolo = new Map([["vehicle", "Millenium Falcon"], ["bff", "Chewbecca"], ["sweetheart", "Leia"]]);

console.log(hanSolo.size);
console.log(hanSolo.get("vehicle"));
console.log(hanSolo.has("sweetheart"));
console.log(hanSolo.has("jedi"));
hanSolo.set("son", "Ben");

for (let [key, value] of hanSolo) {
    console.log(`${key}: ${value}`);
}

hanSolo.set("bff", "Luke");
console.log(hanSolo);
hanSolo.delete("son");
console.log(hanSolo);