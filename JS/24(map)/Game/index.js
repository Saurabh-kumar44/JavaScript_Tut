// Snake water and Gun

let user = prompt("Enter S,W or G");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]

const match = (cpu,user) => {
    if(cpu === user){
        return "Nobody wins!";
    }
    else if(cpu === "S" && user === "W"){
        return "CPU";
    }
    else if(cpu === "W" && user === "G"){
        return "CPU";
    }
    else if(cpu === "G" && user === "S"){
        return "CPU";
    }
    else if(user === "S" && cpu === "W"){
        return "User";
    }
    else if(user === "W" && cpu === "G"){
        return "User";
    }
    else if(user === "G" && cpu === "S"){
        return "User";
    }
}

let result = match(cpu,user);
document.write(`CPU: ${cpu} <br> USER: ${user} <br> The winner is: ${result}`);