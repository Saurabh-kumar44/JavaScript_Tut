// let p = new Promise((resolve,reject)=>{
//     console.log('Promise is pending');
//     setTimeout(()=>{
//         console.log("I am promise and i am fulfilled");
//         resolve(true)
//         console.log(p);//here the promise is fulfilled so now it get value
//     },3000)
// })
// console.log(p);//here yet promise is not fulfilled(So promise show undefined), after 3sec promise get fullfilled and it get a value


// let p1 = new Promise((resolve,reject)=>{
//     console.log('Promise is pending');
//     setTimeout(()=>{
//         console.log("I am promise and i am resolve");
//         resolve(true)
//         console.log(p1);
//     },3000)
// })
// let p2 = new Promise((resolve,reject)=>{
//     console.log('Promise is pending');
//     setTimeout(()=>{
//         console.log("I am promise and i am reject");
//         reject(new Error("I am an error"))
//         console.log(p2);
//     },3000)
// })
// console.log(p1,p2);


let p1 = new Promise((resolve,reject)=>{
    console.log('Promise1 is pending');
    setTimeout(()=>{
        // console.log("I am promise1 and i am resolve");
        resolve(true)
        console.log(p1);
    },3000)
})
let p2 = new Promise((resolve,reject)=>{
    console.log('Promise2 is pending');
    setTimeout(()=>{
        // console.log("I am promise2 and i am reject");
        reject(new Error("I am an error"))
    },3000)
})
//To get the value
p1.then(function(value){
    console.log(value);
})
//in p2 we have an error as reject so we will handle it below
//To get error
// p2.catch((error)=>{
//     console.log("some error occurred in p2");
// })
p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error);
})
