console.log('Ha to aa gye hum');
let element = document.createElement('li');//it create a single list tag

// Adding the class name to the li element
element.className = 'childul';//it create a class of li
element.id = 'createli';//it create the id of the li
element.setAttribute('title','mytitle');//creats a title inside the li
let text = document.createTextNode('HELLO NEW')//1(same)
element.appendChild(text);//1


//Adding new element in the li
element.innerText = 'This is new saurav'//1(same)this is new text inside the li
element.innerHTML = '<b>HELLO NEW</b>'//1 to put inside the bold use .innerHTML
let ul = document.querySelector('.this');
ul.append(element);//here the element appended in the list

console.log(element);

//Replacing an element
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is created node for elem2')
elem2.appendChild(tnode);

element.replaceWith(elem2);//repalaces the upper created element

let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));//here replaces the myul element with the fui id element
console.log(elem2);

myul.removeChild(document.getElementById('lui'));//can also remove element

// let pr = elem2.getAttribute('id');//it give the id of the element
let pr = elem2.hasAttribute('class');//to check class is present in the elem2 or not
console.log(elem2, pr);
