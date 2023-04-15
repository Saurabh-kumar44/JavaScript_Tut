class Animal{
    constructor(name){
        this._name = name;
    }
    fly(){
        alert("mai urr rha hu")
    }

    set name(newName){
        this._name = newName;
    }
    get name(){
        return this._name;
    }
}

class Rabbit extends Animal{
    eat(){
        console.log("eating carrot");
    }
}

// let a = new Animal("tiger");
let a = new Rabbit("tiger");
console.log(a.name);
// a.fly();
a.name = "lion";
console.log(a.name);

let c = 56;
console.log(a instanceof Animal); //it tell weather a is a instance of Animal or not
console.log(a instanceof Rabbit);
console.log(c instanceof Animal);