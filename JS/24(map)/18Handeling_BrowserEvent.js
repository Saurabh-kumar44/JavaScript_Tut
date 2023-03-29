// btn.addEventListener('click', function(e){
//     alert('Hello world1!');
// })

// btn.addEventListener('click', function(e){
//     alert('Hello world2!');
// })


// let a = prompt("Enter your fav no: ");
// if(a == '2'){
//     btn.removeEventListener('click', function(e){  //here it will not work(It not remove the events) because every function is a different function object(to remove it should have similar refrenced)
//         alert('Hello world');
//     })
// }

//When a event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler
//like
// let x = function(kisna){ //here automatically browser create event object and puts all details about the event into the (kisna)
//     alert('Hello world1!');
//     console.log(kisna);
//     console.log(kisna.target);//it give the target(button)
// }
let x = function(e){
    // alert('Hello world1!');
    console.log(e);
    console.log(e.target);//it give the target(button)
    console.log(e.type, e.clientX, e.clientY);//tells the specific points where u click on the button
}
let y = function(e){
    alert('Hello world2!');
}
btn.addEventListener('click', x);
// btn.addEventListener('click', y);

// let a = prompt("Enter your fav no: ");
// if(a == '2'){
//     btn.removeEventListener('click', x);//npw the x event removed
// }