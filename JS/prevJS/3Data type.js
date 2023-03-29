//JS is dynamic language
//1-PRIMITIVE DATA TYPE

//String
let name = "saurav";
console.log("My string is " + name);
console.log("DATA is " + (typeof name));//it tell the data type
//Numbers
let val = 35;
console.log('DATA is ' + (typeof val));
//Boolean
let isGood = true;
console.log('DATA is ' + (typeof isGood));
//Null
let nullVar = null;
console.log('DATA is ' + (typeof nullVar));//its return value is bogus thats why it return object but it is still primitive data type
//Undefined
let undefWord = undefined;
console.log('DATA is ' + (typeof undefWord));

//2-REFERENCED DATA TYPE

//Arrays
let myvarr = [2,3,45,3,"String"];
console.log('DATA is ' + (typeof myvarr));//it gives the data type is object
//Object literals
let marks1 = {
    saurav: 89,
    shivam: 13,        //These are objects
    NarendarModi: 56
}
console.log(marks1);
//Function
function findName(){
    
}
console.log("DATA is " + (typeof findName));
//Date
let date = new Date();
console.log("DATA type is " +(typeof date));


