console.log('ooh bhai maro mujhe');
//VARIABLES IN JS
// var , let, const
var name = "Sweetysi";
var channel = "Ten sport";
var marks = 34;//it is not correct or put in the quotes to make it string
console.log(name,channel,marks);

//RULES FOR CREATING JS VARIABLES
// 1. cannot start with Number
// 2. can start with letters, numbers, _ or $
// 3. Are case sensitive
var city = "Delhi";
const val = 34//can't change this because it is const
const f = 'Hii';
console.log(city,val,f);
const ownername = 'hari ram';
// ownername = 'saurav'//Not allowed
console.log(ownername);

{
    let city = 'kanpur';
    console.log(city);
    city = 'kolkata'
    console.log(city);
}
console.log(city);//it will still shows delhi because it out of the block

const arr1 = [12,23,45,65,23];
arr1.push(11);//we have arr1 const but still we can add the element inside the array 
// arr1 = [23,45,63]//but cannot redeclared
console.log(arr1);

//MOST COMMON PROGRAMING CASE TYPE
// 1.camelCase 
// 2.kebab-case
// 3.snake_case
// 4.pascalCase

