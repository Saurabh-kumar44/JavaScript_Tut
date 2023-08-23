// function myFunc() {
//     console.log(this)     
//   }
 
// const obj = {
//   bool: true,
//   myFunc: myFunc,
// }

// obj.myFunc()


// const student_1 =  {
//     name: 'Randall',
//     displayName_1: function displayName() {
//         // console.log(student_1.name)
//         console.log(this.name)
//     }
// }
// const student_2 =  {
//     name: 'Raj',
//     displayName_2: function displayName() {
//         console.log(this.name)
//     }
// }

// student_1.displayName_1()
// student_2.displayName_2()
// student_1.displayName_1.call(student_2)// student_1.displayName_1.call(student_2)  


// const myData = {
//     name: 'Rajat',
//     city: 'Delhi',
//     displayStay: function () {
//       console.log(this.name, 'stays in', this.city)
//     },
//   }
//   myData.displayStay()
  
//   // create an object yourData and try to use displayStay
//   const yourData = {
//    name: 'name',
//    city: 'city'
//   }
  
  
//   // answer
//   myData.displayStay.call(yourData)


//For an arrow function, the value depends on the lexical scope – that is to say, the outer function where the arrow function is declared.
// let user = {
//     name: "GFG",
//     gfg1:() => {
//         console.log("hello " + this.name); // no 'this' binding here
//     },
//     gfg2(){   
//         console.log("Welcome to " + this.name); // 'this' binding works here
//     }
// };

// const yourData = {
//     name: 'saruav'
// }
// user.gfg1();
// user.gfg2();
// user.gfg2.call(yourData);


// let arr = ['Rajat', 'Raj']
// console.log(arr.__proto__.forEach)
// console.log(arr.__proto__) // same as Array.prototype
// console.log(arr.__proto__.__proto__) // same as Object.prototype
// console.log(arr.__proto__.__proto__.__proto__) // null


// //'this' as something which provides context
// function myFunc() {
//     // console.log(this)     
//   }
// const obj = {
//   bool: true,
//   myFunc: myFunc,
// }
// obj.myFunc()


// //Prototypal Inheritance
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const person1 = new Person("David", 30);
// const person2 = new Person("John", 35);
// console.log(person1); // {name: "David", age: 30}
// console.log(person2); // {name: "John", age: 35

// // person1.gender = "male";//1
// person1.__proto__.gender = "male"//2
// console.log(person1.gender);// 1 work for this 
// console.log(person2.gender);// 1 but not for this(if want add properties to itself to Person then use prototype)
//Example of prototypal Inheritance

// let object = {
//     name: 'Rajat',
//     city: 'Delhi',
//     getIntro: function () {
//       console.log(`${this.name}, ${this.city}`)
//     },
//   }
//     let object2 = {
//     name: 'Aditya',
//   }
// //   object2.getIntro();//it will not work
//   object2.__proto__ = object;
//   object2.getIntro();//now it will work(and this Prototypal Inheritance)


// function foo(){
//     return foo();
// }
// foo();


// for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
// }
// for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, i * 1000)
// }
// for (var i = 1; i <= 5; i++) {
//     (function (num) {
//       setTimeout(function () {
//         console.log(num);
//       }, num * 1000);
//     })(i);
//   }


// this - array
// this[i] - current value
// Array.prototype.myMap = function (cb) {
//     var arr = []
//     for (var i = 0; i < this.length; i++) {
//       arr.push(cb(this[i], i, this))
//     }
//     return arr
//   }
  
//   const arr = [1, 2, 3]
//   console.log(arr.myMap((a) => a * 2)) // [2, 4, 6]


