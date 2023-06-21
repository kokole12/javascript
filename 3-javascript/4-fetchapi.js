#!/usr/bin/node
const fetch = require("node-fetch");

const getRandomUsers = n => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${500}`)

    fetchRandomUsers.then(data => {
        data.json().then(randomUsers => {
            console.log(JSON.stringify(randomUsers, null, 2))
        }).catch(error => {
            console.log(error)
        })
    })
}

getRandomUsers(10);
