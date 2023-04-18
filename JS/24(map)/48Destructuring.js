// let arr = [2,4];
// let [a,b] = arr;//Destructuring
// console.log(a,b);

// let arr = [2,4,3,5,6];
// let [a, b, c] = arr;  //not all values has taken
// console.log(a, b, c);

// let arr = [2,4,3,5,6];
// let [a, b, c, ...rest] = arr;
// console.log(a, b, c, rest); //now remaining values get into the rest

let arr = [2,4,3,5,6];
let [a, , ,...rest] = arr;
console.log(a, rest);