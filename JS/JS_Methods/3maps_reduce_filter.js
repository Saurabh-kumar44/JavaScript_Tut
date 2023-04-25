//MAP
// let arr = [34,65,85,23]
// let a = arr.map((val)=>{ //gives new array with some operation on each elements
//     console.log(val);
//     return val + 1;
// })
// console.log(a);

// let arr = [34,65,85,23]
// let a = arr.map((val , index, arr)=>{
//     console.log(val, index, arr);
//     return val + 1; //new array with these values
// })
// console.log(a);

//Array filter method
// let arr2 = [2,3,423,532,5,1,0,33]
// let a2 = arr2.filter((a)=>{
//     return a>33;
// })
// console.log(a2);


//Array Reduce methods
// let arr3 = [1,2,4,3,6,2]
// let newArr = arr3.reduce((h1, h2)=> {
//     return h1 + h2;
// })
// console.log(newArr);

        //OR (same)
let arr3 = [1,2,4,3,6,2]
let reduce_arr = (h1,h2) => {
    return h1 + h2
}

let newArr = arr3.reduce(reduce_arr);
console.log(newArr);