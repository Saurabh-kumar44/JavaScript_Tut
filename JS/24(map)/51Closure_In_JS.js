// message = "global string"
// function hello1(){
//     message = "local string";
//     console.log("hello1 " +message);
// }
// hello1();

// message = "global string"
// function hello1(){
//     let message = "local string"; //let = block level scope 
//     {
//         let message = "sub local string"
//         console.log("hello1 " +message);
//     }
//     console.log("hello1 " +message);
// }
// hello1();


//Example of clousre
// message = "global string"
// function hello1(){
//     let message = "local string"; //let = block level scope 

//     let c = function hello2(){
//         console.log("I am C "+message) ;  //closure = ek function jo ki return me milta hai apne environment ke sath(function + lexical Environment) matlb ye hello2 ka function + usme jo message hai uska refrences(value in lexical environment ke refrences return hote hai)
//     }
//     return c;
// }
// c = hello1();
// c();  


//Another example of closure
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {// function
    //   displayName() //is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    name = "kkusna"; //lexical environment
    return displayName;
  }
let c = init();
c();
  