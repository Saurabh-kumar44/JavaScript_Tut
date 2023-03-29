
const canDrive=(age)=>{
    return age>=18?true:false;
}

let runAgain = true;
while(runAgain){
    let age = prompt("Enter your Age")
    age = Number.parseInt(age);
    if(age<0){
        console.error("Please enter a valid age");
        break;
    }
    if(canDrive(age)){
        alert("You can drive")
    }
    else{
        alert("Your cannot Drive")
    }
runAgain = confirm("You want to continue?");
}

