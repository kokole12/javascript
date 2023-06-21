#!/usr/bin/node
const request =  require('request');
const fs = require('fs');
const filename = process.argv[3];

const url = process.argv[2];

request.get(url, (error, response, body) => {
    if (error){
        console.log(error);
    }
    else{
        fs.writeFile(filename, body, 'utf-8', (error) => {
            console.log(error);
        })
    }
})