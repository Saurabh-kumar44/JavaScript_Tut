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


//Rewrite the Loadscript function using "promises"
const loadscript = (srca) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = srca;
        document.body.appendChild(script);
        script.onload = () => {
            resolve(1);
        }
        script.onerror = () => {
            reject(0);
        }
    })
}
// let p1 = loadscript('http://localhost:3000/25index.js');
let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
//same
// p1.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log("We are sorry, we are having problems");
// })
//same
// p1.then((value) => {
//     console.log("successfully loaded",value);
// },((error) => {
//     console.log("We are sorry, we are having problems");
// }))

p1.then((value) => {
    console.log("successfully loaded",value);
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
}).then((value) => {
    console.log("Second sript ready");
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
}).then((value)=>{
    console.log("third script is ready");
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
}).catch((error)=>{
    console.log("Script failed",error);
})