const name = 'saurav';
const greeting = 'Good morning ';
console.log(greeting+ '' +name);
// let html;
// html = `<h1> This is heading</h1> +
        // <p>This is My para</p>`;
// html = `<h1> This is heading</h1>
        // <p>This is my para</p>`;   //this is valid concatination      
// html = 'saUrAv This <is a good kimds';
//FUNCTIONS
// html = html.concat('this',' game');//it will concatinate this and game in the string
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html[0]);
// console.log(html[1]);
// console.log(html[2]);
// console.log(html[3]);
// console.log(html[5]);


// console.log(html.indexOf('This'));
// console.log(html.indexOf('Tfsa'));//if not present the it will return -1
// console.log(html.lastIndexOf('para'));
// console.log(html.charAt('3'));
// console.log(html.endsWith('game'));
// console.log(html.includes('My'));
// console.log(html.substring(0,4));
// console.log(html.slice(-4));
// console.log(html.slice(0,4));
// console.log(html.split(' '));//this split function makes the string each letter after the space in a single element
// console.log(html.split('<'));//this split function makes the string each letter after the < in a single element
// console.log(html.replace('This','hello'));//Replace the first occurence

// //
// let fruit1 = 'Mango\'';
// let fruit2 = 'Apple';
// let myhtml = `Hello ${name}
//              <h1>This is my Heading</h1>
//              <p1>You like ${fruit2} and ${fruit1}</p>`;
// document.body.innerHTML = myhtml;
// console.log(myhtml);
// console.log(fruit1);

var arr = [10,23,45,2,54];
var newArr = arr.map(function(value){
        value++;
        console.log(value);
});
document.body.innerHTML = arr;
console.log(arr);

// var arr = [10,23,45,2,54];
// var newArr = arr.map(function(value){
//         value++;
//         return value;
// });
// console.log(arr);//it return the old array
// console.log(newArr);//it return the new modify array
