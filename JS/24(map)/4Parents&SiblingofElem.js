console.log(document.body.firstChild)
let a = document.body.firstChild
console.log(a.parentNode);//Node can be return even if the parent is document (like if want to clg parent of document.documentElement then document shows)
console.log(a.parentElement);//in this it should be an html element
console.log(a.firstChild.nextSibling);