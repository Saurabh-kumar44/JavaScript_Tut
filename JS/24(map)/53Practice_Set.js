// Q-1 Write a JavaScript program to print the following 2 Second delay Hello World using IIFE function
// const a = (text) =>{
//     return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 resolve(text);
//             },2000)
//     })
// }

// (
//    async()=> {
//         let text = await a("Hello");
//         console.log(text);
//         text = await a("world");
//         console.log(text);
//     }
// )()


//Q-2 Write a JavaScript program to find average of numbers in on array using spread Syntax
function sum(a, b, c){
    return a+b+c;
}
let arr = [1,2,3];
console.log("The sum is: " +sum(...arr));

//Q-3 Write a JavaScript function which resolves a Promise after n seconds. The function takes n was the parameter. Use an IIFE to execute the functions with different values of n
const a = (text, n=2) =>{
    return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(text);
            },2000)
    })
}

(
   async()=> {
        let text = await a("I am resolving aftre 1 sec" ,1);
        console.log(text);
        text = await a("I am resolving aftre 2 sec", 2);
        console.log(text);
    }
)()