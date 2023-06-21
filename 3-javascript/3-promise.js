#!/usr/bin/node

const promise =  new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("data sent from server");
    }, 2000);

    setTimeout(()=>{
        reject("error 404");
    }, 3000);
});


promise.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})
