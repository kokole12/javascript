#!/usr/bin/node
async function logName(name) {
    console.log(name);

    const newPromise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(name.toUpperCase())
        }, 6000);
    })
    const result = await newPromise;

    console.log(result);
}

logName("castro").then(res => {
    console.log("first response");
}).catch(error => {
    console.log(error);
})

