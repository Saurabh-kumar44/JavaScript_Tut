// //Q1- use a free API from internal & feed you app with live data

let url = "https://kontests.net/api/v1/all";

let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((contest) => {
    // console.log(contest); //v is a array
    ihtml = ""
    for (item in contest) {
        console.log(contest[item]);
        ihtml += `<div class="card mx-3 my-3" style="width: 15rem;">
        <img src="https://img.freepik.com/premium-vector/programming-code-icon-made-with-binary-code-coding-hacker-matrix-background-with-digits-1-0_127544-1141.jpg?w=2000" class="card-img-top" alt="OOps">
        <div class="card-body">
          <h5 class="card-title">${contest[item].name}</h5>
          <p class="card-text">${contest[item].start_time}</p>
          <p class="card-text">${contest[item].end_time}</p>
          <p class="card-text">Status is: ${contest[item].status}</p>
          <a href="${contest[item].url}" class="btn btn-primary"my-3>Go to Contest</a>
        </div>
      </div>`
    }
    cardContainer.innerHTML = ihtml
})

// //NOTES APP
// //Q-2 Create a note saving app which stores your note to localStorage
// // let a = prompt("Enter your notes here...");
// // localStorage.setItem("notes", a);

// // Q-3 Fetch the note which was saved
// let n = localStorage.getItem("notes");
// alert("Your Notes is: " +n);

// let a = prompt("Enter your notes here...");
// if(a){
//     localStorage.setItem("notes", a);
// }

// //Q-4 delete the note which was saved
// let c = confirm("Are you sure you want delete your notes?");
// if(c){
    // localStorage.removeItem("notes");
// }