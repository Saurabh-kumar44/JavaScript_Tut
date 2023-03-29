console.log('Welcome to the app');
shownotes();//called here too because when wwe reload the page all nodes disapper so on calling pre prevent this

//if user add a note in localstorage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){//attaching event when click on the Add button

    let addtxt = document.getElementById('addtext');
    let notes = localStorage.getItem("notes");
    if(notes==null){
     notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    // console.log(notesObj);

    shownotes();

});

function shownotes(){//Function to show elements of local storage
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element , index){
        //it means in html this card get append in the html string
        html +=`
        <div class="my-2 mx-2 card" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <h5 class="card-title">Notes ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id='${index}' onclick='deleteNote(this.id)' class="btn btn-primary">delete note</button>
        </div>
      </div>`
    });
    let notesElm = document.getElementById('notes');
    if(notesObj.length!= 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show! "Add a node" section above to add notes.`
    }
}

//Fuction to delete notes
function deleteNote(index){
    // console.log('I am deleting', index);

    let notes = localStorage.getItem("notes");
    if(notes==null){
     notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));//now it will delete the noted   
    shownotes();
}

let search = document.getElementById("searchTxt");
searchTxt.addEventListener('input', function(){

    let inputVal = search.value.toLowerCase();
    // console.log('input event fired!', inputVal);
    // console.log('input event fired!');

    let card = document.getElementsByClassName('card');
    Array.from(card).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;//it means mujhe uske andar ka paragraph chaiye

        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });

});

