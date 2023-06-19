#!/usr/bin/node
const occurence = process.argv[2]

if (occurence == null && !(parseInt(occurence))){
    console.log("Missing size");
}
for (let i = 0; i < occurence; i++) {
    let symbol = "";
    let y = 0;

    while (y < occurence){
        symbol = symbol + "X";
        y++;
    }
    console.log(symbol);
}
