// let p = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log("Resolved after 2 seconds")
//         resolve(56);
//     }, 2000)
// })
// p.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {resolve("Promise 2");},2000)
//     })
//     return p2;
// }).then((value)=>{
//     console.log("after promise2 to We are done");
//     console.log(value);
//     return 2;
// }).then((value)=>{
//     console.log("Now we are done after done" , value);
// })