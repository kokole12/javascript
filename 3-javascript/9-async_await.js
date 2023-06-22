#!/usr/bin/node
const fetch = require("node-fetch");

const getRandomUser = async n => {
    const randomUsers = await fetch(`https://randomuser.me/api/?results=${n}`);
    const data = await randomUsers.json();
    data.results.forEach(person =>{
        const result = JSON.stringify(person, null, 2);
        console.log(result.gender);
    })
}


getRandomUser(3);
