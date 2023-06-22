#!/usr/bin/node
const gen = function*() {
    yield 1;
    yield "one";
    yield true;
    yield {name: "alex"};
}


const getNums = gen();

console.log(getNums.next().value);
