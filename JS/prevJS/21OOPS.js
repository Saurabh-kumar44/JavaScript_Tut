console.log('Hello bhaiya');

//OBJECT LITERALS(for creating literals)
// let car = { //here car is the object
//     name: 'yamaha',
//     speed: '200kmph',
//     run: function(){
//         console.log('car chal rahi hai');
//     }
// }
// console.log(car);
// console.log(car.run());

// //Creating a Constructor
class Generalcar {
    constructor(givenname, givenspeed) {
        this.name = givenname;
        this.speed = givenspeed;
        this.run = function () {
            console.log(`${this.name} is running`);
        };
        this.analyzed = function () {
            console.log(`These car is slower by ${500 - this.speed}kmph than my CYCLE`);

        };
    }
}
    //OR
// //Creating a Constructor
// class Generalcar {
//     constructor(givenname, givenspeed) {
//         this.name = givenname;
//         this.speed = givenspeed;
//         this.run = function () {
//             console.log(`${this.name} is running`);
//         };
//         this.analyzed = function () {
//             console.log(`These car is slower by ${500 - this.speed}kmph than my CYCLE`);

//         };
//     }
// }

car1 = new Generalcar('mercedes','380');//here car1 is object  
// car2 = new Generalcar('jaguar','400');//here car2 is object

console.log(car1);
console.log(car1.analyzed());

console.log(car1.run());
// console.log(car2.run());

