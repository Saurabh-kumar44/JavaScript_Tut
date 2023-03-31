// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 1");
//     },2000)
// })

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 2");
//     },3000)
// })

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 3");
//     },4000)
// })
// 
// // here after 1sec promise1 resolve value print afrer 2sec promise2 and after 3sec promise 3
// // p1.then((value)=>{
// //     console.log(value);
// // })
// // p2.then((value)=>{
// //     console.log(value);
// // })
// // p3.then((value)=>{
// //     console.log(value);
// // })



// //what if we want to get value of all the promises at once then we w'll use
// let promise_all = Promise.all([p1,p2,p3]);
// promise_all.then((value)=>{
//     console.log(value);
// })

//upper if a single promise is rejected error occures and remaining will also not worked so fix this
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 1");
//     },2000)
// })

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(new Error("Some Error Occurred"));
//     },3000)
// })

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("value 3");
//     },4000)
// })

// //what if we want to get value of all the promises at once then we w'll use
// // let promise_all = Promise.all([p1,p2,p3]);
// let promise_all = Promise.allSettled([p1,p2,p3]);
// promise_all.then((value)=>{
//     console.log(value);
// })



let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 1");
    },11000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve("value 2");//1
        reject(new Error("Some error occured"));//2
    },3000)
})

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    },4000)
})
//race - which have the fastest resolve promise will print
let promise_all = Promise.race([p1,p2,p3]);//1
// let promise_all = Promise.any([p1,p2,p3]);//2 it do not show error (it showed the fastest resolve promise neglecting the rejected ones)
// let promise_all = Promise.resolve(6);
// let promise_all = Promise.reject(new Error("Error aya re"));
promise_all.then((value)=>{
    console.log(value);
})

