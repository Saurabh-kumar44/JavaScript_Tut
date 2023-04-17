//1
// let a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(345);
//     }, 2000)
// })

//2
let a =()=>{ return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(345);
    }, 2000)
})}
// let b = await a;
// let c = await a;
// let d = await a;
// console.log(b,c,d); //error occures (await is only valid in async functions and the top level bodies of modules)
// //so we do 

//1
// let f = async () => {
//     let b = await a;
//     console.log(b);
//     let c = await a;   //here as a is not a function (a is a single promise so after 4000 it resove and all a, b, and c fullfilled(so we make 'a' a function which return new promise on each call))
//     console.log(c);
//     let d = await a;
//     console.log(d);
// }
// f();

//2
// let f = async () => {
//         let b = await a();
//         console.log(b);
//         let c = await a();   //here as a is not a function (a is a single promise so after 4000 it resove and all a, b, and c fullfilled(so we make 'a' a function which return new promise on each call))
//         console.log(c);
//         let d = await a();
//         console.log(d);
//     }
//     f(); //for using this we have to call it so(to prevent this we use IIFE directly call it)

// IIFC
(async () => {
    let b = await a();
    console.log(b);
    let c = await a();   //here as a is not a function (a is a single promise so after 4000 it resove and all a, b, and c fullfilled(so we make 'a' a function which return new promise on each call))
    console.log(c);
    let d = await a();
    console.log(d);
})() //calling ('()')

//now inside IIFE (whole becomes a single entity and runs in IIFC block only after complete execution the memory for a, b, c will be destroy(the scope is only inside the IIFE block))
// console.log(b);//can't work(scope is not here)