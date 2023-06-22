#!/usr/bin/node
const getNumbers = function*(numbers){
    for (let i = 0; i < numbers.length; i++){
        yield numbers[i];
    }
}

const getNumbersGen = getNumbers([1, 2, 3, 4, 5]);

const interval = setInterval(() => {
    const next = getNumbersGen.next();
    if (next.done) {
        console.log("generator is done");
        clearInterval(interval);
    }
    else{
        const number = next.value;
        console.log(number);
    }
}, 1000)