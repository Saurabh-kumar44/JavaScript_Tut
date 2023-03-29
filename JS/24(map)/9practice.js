// let a = document.getElementsByTagName("nav")[0].firstElementChild.style.color = 'red';
// console.log(a);


document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'blue';
document.getElementsByTagName('nav')[0].lastElementChild.style.color = 'green';

//changed the color of all the tags of li to cyan color
Array.from(document.getElementsByTagName('li')).forEach((element) => {
    element.style.background = 'cyan';
});