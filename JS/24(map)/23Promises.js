// state - initally pending , then changes to either "fulfilled" when resolve a called or "reject" when reject is called
// result- Initially undefined , then changes to value, if resolved or error when rejected 


let promise = new Promise(function(resolve, reject){
    alert("Hello alert");
    resolve(56);
})

console.log("hello");
setTimeout(()=>{
    console.log("Kisna in 2 seconds");
},2000)

console.log("My name is" + " kisna");
console.log(promise);

