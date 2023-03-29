// FUNCTIONS IN JS
// var i = 345;//AS it is defined globally
// console.log(i);
// function IRON(name){
//     var i = 5;//when we put only i it changes the globally too
//     return `this is a ${name} `;
// }//let or cons have scope inside the block
// console.log(IRON("SAURAV"), i);

// function greet(name, thanks){//OR like this (SAME)
//     console.log(`Sending ${name} someone a short but heart-warming message early in the morning can mean the difference between a beautiful day and one without much energy. It is putting down on paper the desire to have that loved one waking up next to you or simply hearing their voice calling out from down stairs ${thanks}.`);
//     return 4;
// const myGreet = function(name, thanks){//OR like this (SAME)
//     console.log(`Sending ${name} someone a short but heart-warming message early in the morning can mean the difference between a beautiful day and one without much energy. It is putting down on paper the desire to have that loved one waking up next to you or simply hearing their voice calling out from down stairs ${thanks}.`);
//     return 4;

// }
// let name = "SKILLI";
// let name2 = "Saurav";
// // greet(saurav , 'THANKS A LOT');//OR same
// let val = greet(name2 , 'THANKS A LOT');
// // let val = myGreet(name2 , 'THANKS A LOT');
// console.log(val);

const obj = {
    name: "Saurav",
    game: function(){
        return "GTA";
    }
}
console.log(obj.game());

arr = ['fruit', 'vegetable','Table fan'];
//FOR EACH LOOP
arr.forEach(function(element , i){
    console.log(element, i);
});


function greeting(parameterVariable) {
    console.log(parameterVariable);

//     // Write a line of code that prints parameterVariable to stdout using console.log:
    // console.log(parameterVariable);
//     // console.log('HackeRank is the best!');
}
greeting("fkajf");
