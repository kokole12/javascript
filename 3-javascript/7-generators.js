#!/usr/bin/node
import coroutine from "bluebird";

const getRandomUser = coroutine(function* (n){
    const fetchRandomUser = yield fetch(`https://randonuser.me/api/?results=${n}`);
    const data =  yield fetchRandomUser.json();
    return data;
});

console.log(getRandomUser(10));
