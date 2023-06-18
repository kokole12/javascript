#!/usr/bin/node
const val = process.argv[2]
if (val != null && typeof(val) !== Number) {
    console.log(parseInt(val));
}
else{
    console.log("Not a number");
}
