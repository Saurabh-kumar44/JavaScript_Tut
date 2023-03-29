//Ther are two element selector in JS
// 1-Single element selector
//2-multi element selector

// 1-Single element selector
console.log('Aaiye swagat');

let element = document.getElementById('myfirst');//it will give the class 
// element = document.childNodes;//it will tell where is the out class part
// element = element.parentNode;//it will give the parent node div
element.innerText = 'Saurav is a good boy'//it will add this in the element
element.style.color = 'red';//we can change css from JS
// element.innerHTML = '<b>This is a man</b>';
// console.log(element.innerHTML);//This will print innerHtml

let a = document;
// console.log(a);
console.log(element);

// let s1 = document.querySelector('#first');//it also tell where are the first div of that ID
// s1 = document.querySelector('.child2')//Here .used to donate the class
// s1 = document.querySelector('b')
// s1 = document.querySelector('h1')
// s1 = document.querySelector('div')
// s1.style.color = 'green' //by this only 1st div get green not all
// console.log(element.innerText);

// console.log(s1);


////2-multi element selector (can select multiple element form DOM at once and iterate them )

//2-multi element selector

// let elems = document.getElementsByClassName('child1');
// let elems = document.getElementsByClassName('container');

// console.log(elems[2]);
// console.log(elems[0].getElementsByClassName('child'));//container ke andar ki sari class milega
// console.log(elems.getElementsByTagName('div'));

// Array.from(elems).forEach(element =>{
//     console.log(element);
//     element.style.color = 'orange';
// });

// for(let index=0; index<elems.length; index++){
//     console.log(element);         
//     element.style.color = 'blue'; //it will do what ye div ke content me ghus ghus ke  blue kr dega  
// }
// console.log(elems);
