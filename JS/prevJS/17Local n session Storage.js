//EACH WEBSITE HAVE IT'S OWN LOCAL STORAGE

console.log('saurav');
// window.localStorage //it is system fuction
// typeof window.localStorage;
// it's typeof is- 'object'
// typeof window.localStorage.name// it type will be 'String'

//It'set a key value pair inside the local storage
localStorage.setItem('name','saurav');//Here we store a data in our local strorage which is inside the Application
localStorage.setItem('name2','gaurav');

//To clear all the local storage
// localStorage.clear();

// To clear particular data from local storage
// localStorage.removeItem('name');

// let name = localStorage.getItem('name2');
// console.log(name);

//
let impArray = ['gazar','muuli','gobhi'];
localStorage.setItem('sabzi', impArray);
// But it stores in the form of String in local storage
// When we try to get the key by localStorage.getItem('sabzi');
// It give in the form of String 
console.log(localStorage.getItem('sabzi'));
//To prevent it

localStorage.setItem('sabzi', JSON.stringify(impArray));//Now it store in the form of array(We convert it into JSON and then assign it key and value)
//JSON.stringify-->Takes object and return String
// let name = localStorage.getItem('impArray');
// name = localStorage.getItem('sabzi');//It will look like Array but it is String so to make it in array format
// name = JSON.parse(localStorage.getItem('sabzi'));//Now it print in Array
// console.log(name);
//JSON.parse-->Takes string and return object

// sessionStorage.setItem('sessionname','Ssaurav');//Here we store a data in our session strorage which is inside the Application
// sessionStorage.setItem('sessionname2','Sgaurav');
// sessionStorage.setItem('sessionsabzi', JSON.stringify(impArray));
// Whenever browser get restart the the SESSION storage get lost but the local storage remain in the browser

