// let arr = [2,4];
// let [a,b] = arr;//Destructuring
// console.log(a,b);

// let arr = [2,4,3,5,6];
// let [a, b, c] = arr;  //not all values has taken
// console.log(a, b, c);

// let arr = [2,4,3,5,6];
// let [a, b, c, ...rest] = arr;
// console.log(a, b, c, rest); //now remaining values get into the rest

// let arr = [2,4,3,5,6];
// let [a, , ,...rest] = arr;
// console.log(a, rest);

// let {a, b} = {a: 1, b:5}
// console.log(a,b);

//Spead syntax- allows an iterable such as an array or string to be expanded in places where zero or more arguments are expexted, In an object literal, the soread syntax enumerated the proprties of an object and adds the key-value pairs to the ibject being created
let arr1 = [3,5,6]
let obj1 = { ...arr1 } //making into object
console.log(obj1);