sessionStorage.setItem("name", "sauv") //Setting  the session storage(remaining all the methods are same as Localstoarage)

// When the data fets updated in localstorage or sessionStorage, storage event triggers
window.onstorage = (e) => {
    alert("Storage update");
}
