class Employe{
    constructor(name){
        console.log(name+" Employee constructor called");
    }
    login(user){
        console.log("Login user " +user);
    }
    logout(){
        console.log("user logout");
    }
    requestLeaves(leaves){//1
        console.log(`employe has request ${leaves} leaves`);
    }
}

class Programmer extends Employe{
    // constructor(){
    //     super();   //The JS engine automatically puts this constructor here(if we don't put manually)
    // }
    constructor(Pname){  //Overriding constructor
        // this.Pname = Pname//here it not valid(below super it is valid)
        super(Pname); //now error removed
        console.log(`${Pname} programmerr constructor called`); //here error occurs(we must call super class constructor )
       this.Pname = Pname
    }
    requestCoffea(){
        console.log(`employee requested ${x} coffea`);
    }
    requestLeaves(){  // 1 Method overriding
        super.requestLeaves(4); //it invokes it parent function(requestLeaves)
        console.log("extra leaves");
    }

}

let e = new Programmer("Kisna");
e.login("saurav");
e.requestLeaves(20)