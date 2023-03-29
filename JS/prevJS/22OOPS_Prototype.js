console.log('HA jiii');

let obj ={ //WE made this object (obj) with help of object litrals
    name : "saurav",
    topic: "prototype",
    address: "PATAL lok"
};
// console.log(obj);

// PROTOTYPE-->IS USED TO ADD NEW PROPERTIES AND METHODS TO AN EXISTING OBJECT CONSTRUCTOR
function Obj(givenName){//here object created with the help of Constructor
    this.name = givenName;
}
// let obj2 = new obj("saurav");
// console.log(obj2);


Obj.prototype.getName = function(){//here we edited the prototype to getName(can check in consol in prototype)
    return this.name; //we can changed only the prototype of objects which is created by constructor not of that objects which is created by object literals
};
Obj.prototype.setName = function(newName){//here we edited the prototype to getName(can check in consol in prototype)
    this.name = newName; //we can changed only the prototype of objects which is created by constructor not of that objects which is created by object literals
};
// obj.prototype.getName = function(){//here we edited the prototype to getName(can check in consol in prototype)
//     return this.name;//can't change it's prototype
// };

let obj1 = new Obj("Spiderman");
console.log(obj1);
// console.log(obj1.toString());//
// console.log(obj1);

// console.log(Obj.setName("krishnsa"));//it will be like this down
// obj1.setName("Krsihna")
// undefined
// obj1
// Obj {name: 'Krsihna'}
// name: "Krsihna"
// [[Prototype]]: Object

