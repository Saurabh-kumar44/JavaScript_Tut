// try{
//     saurav
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error);
// }

// try{
//     // throw new Error("Saurav is not good")
//     console.log(kisna);
//     throw new ReferenceError("Saurav is not good")
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//     // console.log(error);
// }

try {
    let age = prompt("enter your age: ");
    age  = Number.parseInt(age);
    if(age>150){
        // console.log(saurav);
        throw new ReferenceError("this is probably not true")
    }
} catch (error) {
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
    console.log(error);
}
console.log("The script is still running....");