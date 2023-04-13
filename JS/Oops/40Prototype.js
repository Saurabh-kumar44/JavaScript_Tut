// a = {
//     name: "kisna",
//     age: 12,
//     run: () => {
//         console.log(" Self RUNNING"); 
//     }
// }
// console.log(a);

// let p = {
//     run: () => {
//         // alert("run");
//         console.log("RUNNING");
//     }
// }

// // a.run(); //it will not work because a is not defined in it
// a.__proto__ = p; //Making a ka prototype p
// a.run();  //Now it will work (here on running this run method find hoga a object me agar vaha nahi milega to a ke prototype me find hoga)



a = {
    name1: "kisna",
    age: 12,
    run: () => {
        console.log(" Self RUNNING"); 
    }
}
console.log(a);

let p = {
    run: () => {
        console.log("RUNNING");
    }
}

p.__proto__ = {  //prototype of p
    name2: "Chipkali"
}

// a.run(); //it will not work because a is not defined in it
a.__proto__ = p; 
a.run();               
console.log(a.name2); //here first it will find name2 in object 'a' there it not find name2 then it goes to the prototype of 'a' which is p so there it will find then vha nahi milega then it will search into the prototype of p there it found