#!/usr/bin/node
class Rectangle{
    constructor(w, h){
        if (w > 0 && h > 0){
            this.width = w;
            this.height = h;
        }
    }

    print(){
        for(let i = 0; i < this.height; i++){
            let myvar = "";
            let y = 0

            while(y < this.width){
                myvar = myvar + "X";
                y++;
            }
            console.log(myvar);
        }
    }

    rotate(){
        let temp = 0;
        temp = this.width;
        this.width = this.height;
        this.height = temp;
    }

    double(){
        this.width *= 2;
        this.height *= 2;
    }
}

module.exports = Rectangle
