// const i=0;
let i = 0;
submit.addEventListener('click', function (e) {
    e.preventDefault();
    let titlec = document.getElementById('title').value;
    let descc = document.getElementById('desc').value;
    localStorage.setItem(`todo${i++}`, JSON.stringify([titlec, descc]));
    console.log(e);
    todo.innerHTML += `<div class="card" style="width: 18rem;">
                     <img src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"width="300px"height="150px" class="card-img-top" alt="oops">
                        <div class="card-body">
                            <h5 class="card-title">${titlec}</h5>
                            <p class="card-text">${descc}</p>
                         </div>
                    </div>`
    document.getElementById('title').value = "";
    document.getElementById('desc').value = "";
})

deleteBtn.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem(`todo${i--}`);

})

// localStorage.clear()
