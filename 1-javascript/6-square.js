#!/usr/bin/node
const PrevSquare = require('./5-square');

class Square extends PrevSquare {
    constructor(size){
        super(size, size);
    }

    charPrint(c){
        for (let i = 0; i < this.height; i++){
            let myVar = "";
            let y = 0;

            while (y < this.width){
                if (c != null){
                    myVar = myVar + c;
                }
                else{
                    myVar = myVar + "X";
                }
                y++;
            }
            console.log(myVar);
        }             
    }
}

module.exports = Square