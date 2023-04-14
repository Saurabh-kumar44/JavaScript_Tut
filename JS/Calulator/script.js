let string = ""
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => { //it means make array from these buttons
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '='){
      string = eval(string); // eval evaluates the expression
      document.querySelector("input").value = string;
    }
     else if(e.target.innerHTML == 'C'){
      string = ""; // eval evaluates the expression
      document.querySelector("input").value = string;
    }
    else{ 
      console.log(e.target);
      string  += e.target.innerHTML;
      console.log(string);
      document.querySelector("input").value = string;
    }
  })
})
