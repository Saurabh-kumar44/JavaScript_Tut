//Type conversion and type coercion
let myvar = 34;
// console.myvar = (myvar, typeof myvar);
myvar = String(34);
// console.log(typeof myvar);//it is converted to string

let val = String(true);
// console.log(val, typeof val);

// let date = new Date();
// console.log(date, typeof String(date));//it is Date type but it is typescript to String

// let arr = String([3,4,5,3]);
// console.log(arr, typeof arr);//array converted to String

let i = 4;
console.log(i.toString());//it also convert the number into string

// let str1 = Number("34d53");
// // str1 = Number("34d53");//when this number contains char then in output NAN(Not an number) shows and tell it is not a number
// str1 = Number(true);//it gives 1.
// console.log(str1, typeof str1);//change String into number
 
// let number = parseInt("2334");//by this we can also change the string to number
// console.log(number, typeof number);
let number1 = parseFloat("23");//change the INT to FLOAT
// console.log(number1, typeof number1);//OR
console.log(number1.toFixed(2), typeof number1);//here .tofixed(n) it take the 0 as n after decimal

// //TYPE COERCION
let mystr = "345";
let mynum = 34;
console.log(mystr +  myvar);//here number converted to string and concatenate
