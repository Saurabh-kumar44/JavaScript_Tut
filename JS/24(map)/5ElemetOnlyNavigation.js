const changeBgRed = ()=>{
    document.body.firstElementChild.style.backgroundColor = 'red'
}

let b = document.body
console.log("First child of b is: ", b.firstChild);//it will give text
console.log("First child of b is: ", b.firstElementChild);//Here it will give the element child only
