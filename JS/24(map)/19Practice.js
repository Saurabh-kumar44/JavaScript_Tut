// document.getElementById('google').addEventListener('click', function(e){
//     window.location = 'https://www.google.com'
//     window.focus()
// })
// document.getElementById('facebook').addEventListener('click', function(e){
//     window.location = 'https://www.facebook.com'
// })
// document.getElementById('amazon').addEventListener('click', function(e){
//     window.location = 'https://www.amazon.com'
// })

// //Write a JS program to keep fetching contents of website(Every 5 seconds)
// setInterval(async function(){
//     let url = 'https://jsonplaceholder.typicode.com/todos/1'
//     console.log(await fetch(url));
//     // console.log(await fetchContent(url));
// },2000)

//create a glowing bulb effect using classList toggle method in JS
// let first = document.getElementsByTagName('div')[0];
// setInterval(function(){
//     first.classList.toggle('bulb');
//     console.log("Changed and Changed");
// },100)

setInterval(function(){
    document.querySelector("#bulb").classList.toggle('bulb');
    console.log("Changed and Changed");
},100)

