localStorage.setItem("name","saruav") //setting up(adding key value pair into local Storage)

let key = prompt("Enter key")
let value = prompt("Enter value")
localStorage.setItem(key,value);

console.log(`The value at ${key} is ${value}`)

if(key == "red" || key == "blue"){
    localStorage.removeItem(key); //it removes the key value from local storage
}
if(key == 0){
    localStorage.clear()//it clear the whole local storage
}

console.log(localStorage.length); //gives the length