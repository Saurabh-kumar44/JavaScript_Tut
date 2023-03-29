let a  = document.getElementsByTagName('div')[0];

// a.innerHTML = a.innerHTML + `<h1>This is Inserted Part</h1>`

// let div = document.createElement('div');
// div.innerHTML = `<h1>This is Inserted by append Part</h1>`;
// a.append(div);

// let n = 5;
// while(n--){
//     let div = document.createElement('h2');
//     div.innerHTML = `Put again`;
//     a.append(div);
// }

let div = document.createElement('div');
div.innerHTML = `<h1>This is Inserted by append Part</h1>`;
// a.append(div);
a.prepend(div);
a.before(div);
a.after(div);
// a.replaceWith(div);

