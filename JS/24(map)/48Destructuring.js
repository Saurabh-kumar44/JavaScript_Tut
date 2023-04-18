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
// let arr1 = [3,5,6]
// let obj1 = { ...arr1 } //making into object(... = spread operator)
// console.log(obj1);

let arr1 = [3,5,6]
let obj1 = { ...arr1 } //making into object(... = spread operator)
console.log(obj1);
function sum(v1, v2, v3){
    return v1 + v2 + v3;
}
console.log(sum(...arr1));


let obj2 = {
    name: 'popu',
    company: "google",
    address: "yxz"
}
console.log({...obj2, name:"kisna"}); //here name kisna will be override
console.log({ name:"kisna", ...obj2});//here override first then whole obj will be print as it is(so name not changes)