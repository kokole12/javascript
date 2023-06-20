#!/usr/bin/node

const { list } = require('./100-data');

const elements = require('./100-data').list;

const multiplier = 0;
const newAarray = elements.map(function (x, index) {
  return x * index;
});

console.log(list);
console.log(newArray);
