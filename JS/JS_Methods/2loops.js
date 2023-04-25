// let arr = [1,2,4,5,6,7,8]


// //For Each
// arr.forEach((element) => {
//     console.log(element);
// })

// Array.from - it converts into an array
let name = "Kisna"
let arr = Array.from(name); //now it converted into the array
console.log(arr); 

let num = [3,4,5,6,7,8]
//For...of
// for(let i of num){
//     console.log(i);
// }

//For...in
for(let i in num){
    // console.log(i);
    console.log(num[i]);
}