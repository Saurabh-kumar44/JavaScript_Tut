//Yet these are node list
console.log(document.body.firstChild);//it give text because after <body>___ space is present
console.log(document.body.lastChild);

//convert to array
let arr = Array.from(document.body.childNodes);
console.log(arr);