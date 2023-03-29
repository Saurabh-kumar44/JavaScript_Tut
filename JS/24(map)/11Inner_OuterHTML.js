// console.log = show the Element DOM tree
// console.dir = it show element as an object with its properties
// nodeName = property returns the name of a node

// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);

let x = document.getElementsByTagName('span')[0];
console.log(x);

let y = document.getElementsByTagName('span')[0];
console.dir(y);


// innerHTML = properties allows to get HTML inside the element as a string(Valid for element Nodes)
console.log(first.innerHTML);
// outerHTML = property that contains the full HTML (innerHTML + the element) itself
console.log(first.outerHTML);

console.log(document.body.firstChild.data);//same
console.log(document.body.firstChild.nodeName);//same

console.log(document.body.textContent);//give all the text content

//To see the hidden element write this on console
// $0.hidden = false
// first.hidden = false