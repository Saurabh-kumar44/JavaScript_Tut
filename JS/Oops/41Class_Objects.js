class RailWayForm{
    // constructor(){
    //     console.log("I'm constructor");
    // }
    constructor(name){
        console.log("I'm constructor " + name);
    }
    submit(user){
        this.user = user;
        console.log("Submit " + user);
    }
    cancel(){
        console.log(this.user);
        console.log("Cancel");
    }
}

let obj = new RailWayForm("saurav");
obj.submit("kisna");
obj.cancel();
// console.log(obj.user);