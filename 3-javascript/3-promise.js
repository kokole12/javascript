#!/usr/bin/node

const promise =  new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("data sent from server");
    }, 2000);

    setTimeout(()=>{
        reject("error 404");
    }, 3000);
});

const namePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Annie", "Jane", "Anifa"])
    }, 1000);

    setTimeout(() => {
        reject("no data")
    }, 1000);
})

// promise.then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// })

Promise.all([promise, namePromise]).then(data => {
    const [message, names] = data;
}).catch(error => {
    console.log(error);
})