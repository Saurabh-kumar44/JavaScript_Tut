const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(src + " Return success");
        }
        document.head.append(script);
    })
}

// //Loading script using .then() method
// let a =loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
// a.then((value)=>{
//     console.log(value);
// })

// //Loading script using async await
// const main1 = async () => {
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }
// main1();


// //Practice 3
// //Create a promise which rejects after 3 seconds use an async await to get its value use a try catch to handle its error
// const p = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("This script is not acceptable"));
//         }, 2000);
//     })
// }
// let a = async () => {
//     try {
//         let c = await p();
//         console.log(c);
//     } catch (error) {
//         console.log("This error has been handled");
//     }
// }
// a();


//Practice 4
//write a program using Promise.all() inside an async/await to await 3 Promises compare its result with the case where we await these promise are by one
let p1 = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    })
}
let p2 = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 2000);
    })
}
let p3 = async () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 2000);
    })
}

const run = async () =>{
    console.time('run')
    // let a = await p1();//first this will run completely
    // let b = await p2();//then this will run completely   (So this is not gud practice) it took 6 sec
    // let c = await p3();//then this will run completely
    // console.log(a,b,c); 

    let promise_all = Promise.all([p1,p2,p3]); // now it will took very less time sec
    console.log(promise_all);
    console.timeEnd('run');

}
run();