//Traversing DOM
console.log('Welcome');

// let cont = document.querySelector('.no');//queryselector select the element using selector and if the selector have multiple element then we'll get the 1st element
// cont = document.querySelector('.container')
// console.log(cont.childNodes);//it will show all the child nodes(But it count also the spaces and textes)
// console.log(cont.children);//it will show only the elements 
// console.log(cont);


// let nodename = cont.childNodes[3].nodeName;//it tell the on the 2nd element what is the element type(like when we do .childNode)
// console.log(nodename);
// let nodeType = cont.childNodes[0].nodeType;//it will tell the type of the node
// console.log(nodeType);

//[NODE TYPES]
// 1. Element
// 2.Attribute
// 3.Text Node 
// 4.comment
// 5.document
// 6.docType

let dabba = document.querySelector('.container');//or can put div.container
// console.log(dabba.children);
// console.log(dabba.children[1].children[0].children);//it will give dabba ke children ke andar vala children(Which is this wala) and then uske andar ke bhi sare chilren 
// console.log(dabba.firstChild);//give the first child which is text(give text comment which is first)
// console.log(dabba.firstElementChild);//it give the first element child
console.log(dabba.lastElementChild);//give the last child element
console.log(dabba.children);

// console.log(container.childElementCount);//can count the number of element

console.log(dabba.firstElementChild)//give it's first child
console.log(dabba.firstElementChild.nextElementSibling)//give the child next to the first child

