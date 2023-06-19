#!/usr/bin/node
const num = process.argv[2]
function factorial(n) {
    if (n == 0 || n == NaN){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}

console.log(factorial(num));
