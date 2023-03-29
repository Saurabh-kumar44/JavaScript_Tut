//Changed the card title to red
let ctitle = document.getElementsByClassName("card-title")[0]//it gives all the elements whose class name is "card-title" and on putting [0] the first element whose class name is "card-title" will be given
// let ctitle = document.getElementById("firstcardtitle2")
ctitle.style.color = 'red';
// console.log(ctitle);

let ctitles = document.querySelectorAll(".card-title");//it give all the class whose name is "card-title"
ctitles[0].style.color = 'blue';//taking first class whose name is "class-title"
ctitles[1].style.color = 'green'//taking second class whose name is "class-title"
ctitles[2].style.color = 'purple'
console.log(ctitles);

document.querySelector('.this').style.color = 'violet'

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector('.card').getElementsByTagName('a'));//it means firstly select element whose name is ".card" and then inside that element search for all 'a' tag
console.log(document.getElementsByName('home'));