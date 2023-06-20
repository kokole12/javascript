#!/usr/bin/node
const fs =  require('fs');
const filename = process.argv[2]
let data = process.argv[3]
fs.writeFile(filename, data, 'utf-8', (err) => {
    if (err){
        console.log(err);
    }
});
