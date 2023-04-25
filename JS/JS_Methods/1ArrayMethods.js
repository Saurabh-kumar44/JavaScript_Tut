// let num = [1,22,3,45,522]
// let b = num.toString(); //convert array into string
// console.log(b, typeof b);


// let c = num.join("_");
// console.log(c, typeof c);

// // let r = num.pop(); //remove the last element of the array
// // console.log(num, r);   // also return the poped element

// let p = num.push(56);
// console.log(num, num.length);

// let s = num.shift(); //remove first element
// console.log(num);

// let u = num.unshift(88); //add into the first element
// console.log(num);

// delete num[0] //removes but length remain same
// console.log(num , num.length);

// let num1 = [6,7,8,9]
// let newArray = num.concat(num1); //doesnot change the existing array
// console.log(newArray)


//Sort method
// console.log(num.sort());//it sort alphabetically(consider as a string) change the original array
     //OR

let compare = (a,b) => {
    // return a - b //ascending order
    return b - a    //descending order
 }

let arr = [34,62,1,4,63,72,7,2]
arr.sort(compare);
console.log(arr);

// num.reverse();
// console.log(num);

//splice()- used to add new items to an array
//  .splice(index, no. of elements to remove, elements to be added)
let num = [551,4,6,63,734,1,64,7,3]
// num.splice(2,4, 1011,1012,10113) // here start from index=2, and removes 3 elements- 6,734,1 and add this 1011,1012,10113 
// let deletVal = num.splice(2,4, 1011,1012,10113)
// console.log(num);
// console.log(deletVal, typeof deletVal); //return the object of array of deleted values

//slice() - slices out a piece from an array (it creates a new array)
// let newNUM = num.slice(2)
let newNUM = num.slice(2, 4)// 4th index not included 
console.log(newNUM);

