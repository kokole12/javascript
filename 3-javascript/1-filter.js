#!/usr/bin/node
let arr = [3, 2, 11, 4, 6, 8, 22, 31, 17];

const odds = arr.filter(x => x % 2 != 0);

console.log(odds);
