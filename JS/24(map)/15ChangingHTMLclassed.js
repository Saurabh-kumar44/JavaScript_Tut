first.className = "text-dark red"//1 set the class red
// first.setAttribute("class", "red")//1

// console.log(first.classList);//it list all the classed of elem
first.classList.remove('red')
// first.classList.add('red')
// first.classList.toggle('red');//if red class not there then it add , if there then it removes
console.log(first.classList.contains('red'))