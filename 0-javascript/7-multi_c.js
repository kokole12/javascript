#!/usr/bin/node
const count  = process.argv[2]
if (count == null && typeof(count) != Number) {
    console.log("Missing occurences");
}
for (let i = 0; i < count; i++) {
    console.log("C is fun");
}

