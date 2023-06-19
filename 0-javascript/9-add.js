#!/usr/bin/node
let a = process.argv[2]
let b = process.argv[3]

function add(a, b){
    return parseInt(a) + parseInt(b);
}

console.log(add(a, b));
