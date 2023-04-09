// console.log(document.cookie);
// document.cookie = "name=Saurav11223344"//adding a cookie
// document.cookie = "name1=Saurav11223344"
// document.cookie = "name=Kisna"//it replaces the cookeie whose key=name

let key = prompt("enter key")
let value = prompt("enter value")
//in key if you put special symbol like semicolon(;) then the value ingnored(to prevent it we use below)1
// document.cookie = `${key}=${value}`

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`//1
//now the key stores in a encoded form to decode it use (decodeURIComponent(key))

console.log(document.cookie);

//document.cookie = "1=1;2=3"(we set multiple cookie like this(2=3 will be ignored))