// {
//     // let a = 54; //it have local scope
//     var a = 54; //it have global scope
// }
// console.log(a); 


let p=9; //global scope
function ax(){ //function scope
    let a = 34;
    console.log(a);
    console.log(p);
}
ax();
// console.log(a); //here a not available here
console.log(p);