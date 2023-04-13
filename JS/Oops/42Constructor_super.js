class Employe{
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
    requestCoffea(){
        console.log(`employee requested ${x} coffea`);
    }
    requestLeaves(){  // 1 Method overriding
        super.requestLeaves(4); //it invokes it parent function(requestLeaves)
        console.log("extra leaves");
    }

}

let e = new Programmer();
e.login("saurav");
e.requestLeaves(20)