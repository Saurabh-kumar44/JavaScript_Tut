console.log('hello');

const proto = {//proto = object
    slogan: function(){
        return `This company bik gayi hai`;
     },
     changeName: function(newName){
         this.name = newName;
     }
}

//(1)type
//saurav=Object
const saurav = Object.create(proto); //here we creates saurav Oject with help of proto
saurav.name = "hritik";    // these are the properties of object saurav
saurav.role = "programmer";//
// saurav.changeName("saurav2");
// console.log(saurav);

//(2)type
const saurav1 = Object.create(proto, {//this also creates the saurav1 Object
    name: {value: "saurav", writable: true},// this syntaxes are so complex thats why we We'll (ES6 Class)
    role: {value: "programmer"} //on giving writible we can change the name in this type
});
// saurav1.changeName("saurav2");
// console.log(saurav1);

// //Employee constructor
function Employee(name , salary , experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// ////////
// //SLOGAN
Employee.prototype.slogan = function(){//adding the slogan in the emoloyee prototype
    return `This company khareed li gayi hai regards ${this.name}`;
}
//create this object from this constructor now
let sauravObj = new Employee("saurav");
// console.log(sauravObj.slogan());

// //PROGRAMMER
function programmer(name , salary , experience, Language){//programmer=object
    Employee.call(this, salary,salary,experience)//it means iss(this)constructor ke context me call kr do by Employee ko 
    this.Language = Language;
}
// //Inherit the prototype
programmer.prototype = Object.create(Employee.prototype);

// //Manually setting the constructor
programmer.prototype.constructor = programmer;
let rohan = new programmer("Rohan",2,0,"javascript");
console.log(rohan);


