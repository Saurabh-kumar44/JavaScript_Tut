//There are two type of module in JS
// 1- Common module
// 2 - ES6

//Modules - it helps you to break your code into seperate files

//Common JS modules
// const hello = require("./58module1.js"); //// without destructuring
// hello.hello() // without destructuring
// hello.ahello("popu")
// hello.ahello("Krishna")
// hello.ahello("ram")
// ahello("sdlafj")

// const {hello, ahello} = require("./58module1.js")//destructuring

//ES6 Module
import  Kisna ,{ hello, ahello } from "./58module2.js" // as kisa is exported default so we no need to do destructuring can directly use it
Kisna();
hello()
ahello("popu")
ahello("Krishna")
ahello("ram")