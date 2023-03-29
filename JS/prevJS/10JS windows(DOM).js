//DOM->DOCUMENT OBJECT MODEL
console.log('hfk');

//As window is a global variable or object in the clients js so can direct access all it's METHOD's
// let a = window;//it will show all the objects of windows
alert("enter value of a here");//same
// window.alert("OO Bhaiiiii....");//same

a = prompt('Enter here');//this alert occur by pop up and can write inside and print it by the lower console.log();
// a = prompt('Enter here',"1000"); //1000 is default here
a = Number.parseInt(a);
alert("Type is: " +typeof a);
document.write(a);
// a = confirm("Ha Ye PRANI sahi me PAGAL hai");//on clicking on the ok it will return true and on clicking the cancel button it print false
a = window.innerHeight; //these all function works on the page on which that you are working and if u make the page small value print lower or vice a versa
a = innerHeight;
a = outerHeight;
a = scrollY;//it will give the no. whenver we move in x direction or y direction
// a = location;
//Use this in console to check to free location.reload() Then the page get reload 
//Use this in console location.href so that your website works properly Then the page get reload 

a = history;
console.log(a);


