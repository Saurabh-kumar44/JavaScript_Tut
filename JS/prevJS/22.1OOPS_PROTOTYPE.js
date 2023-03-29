console.log('HA jiii');
//when we made this object using object literals then we have already Object.prototype 
// let obj ={ //WE made this object (obj) with help of object literals
//     name : "saurav",
//     topic: "prototype",
//     address: "PATAL lok"
// };

function obj(givenName){
    this.name = givenName;
}

Obj.prototype.getName = function(){//here we edited our obj prototype to getName(can check in consol in prototype)
    return this.name; //we can changed only the prototype of objects which is created by constructor not of that objects which is created by object literals
};

let obj2 = new obj("spiderman");
console.log(obj2);
