//Synchronous Programming
// let a = prompt("What is your Name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your fav color?");
// console.log(a + " is " + b + " years old and has" + c + " favorite color!");

//Asynchronous Programming
// console.log("start");
// setTimeout(() => {
//     console.log("This is asynchhronous"); //so in this first start print setTimeout() schedule in background that after 3 sec it wil run so first Start print, then end prints and after 3 sec setTimeout() works
// },3000)
// console.log("End");

// function loadScript(src){
//     let script = document.createElement('script');
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = function(){ //This onload event occurs when an object has been loaded.
//         console.log("Loaded Script With SRC: " +src);
//     }

// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js")

//CallBack example
// function loadScript(src, callback){
//     let script = document.createElement('script');
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = function(){ //This onload event occurs when an object has been loaded.
//         console.log("Loaded Script With SRC: " +src);
//         callback(src);
//     }
// }

// function hello(src){
//     // alert("callback Example");
//     alert("SRC: "+src)
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js",hello);

// // Callback example
// function loadScript(src, callback){
//     let script = document.createElement('script');
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = function(){ //This onload event occurs when an object has been loaded.
//         console.log("Loaded Script With SRC: " +src);
//         callback(src);
//     }
//     script.onerror = function(){
//         console.log("Error loading sript "+src);
//     }
// }
// function hello(src){
//     // alert("callback Example");
//     alert("SRC: "+src)
// }
// //If the the passing sript is wrong
// loadScript("httpdfaps://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js",hello);

// Callback example
function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = function(){ //This onload event occurs when an object has been loaded.
        console.log("Loaded Script With SRC: " +src);
        callback(null,src);
    }
    script.onerror = function(){
        console.log("Error loading sript "+src);
        callback(new Error("SRC got some error"))
    }
}
function hello(error,src){
    if(error){
        console.log(error);
        return;
    }
    // alert("callback Example");
    alert("SRC: "+src)
}
//If the the passing sript is wrong
loadScript("httpdfaps://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js",hello);