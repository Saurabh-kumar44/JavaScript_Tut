//By using fetch API

// let options = {
//     method: "POST",
//     headers: {
//         "Content-type":"application/json"
//     },
//     body: JSON.stringify({ //convert into javascript object into string(JSON.parse- convert string into javascript valid object)
//         title: 'KISNA',
//         body: 'CHAMP',
//         userId: 44,
//       }),
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));



//Using async function
// const createTodo = async () => {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             title: 'KISNA',
//             body: 'CHAMP',
//             userId: 44,
//         }),

//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }

// const mainFunc = async () => {
//     let todo = await createTodo();
//     console.log(todo);
// }
// mainFunc();


const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),

    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response;
}
const getTodo = async (id) => {
    let response = fetch('https://jsonplaceholder.typicode.com/posts/1' + id)
    let r =  await response.json();
    return r;
}

const mainFunc = async () => {
    let todo = {
        title: "saurav",
        body: "bhai",
        userId: 44
    }
    let todor = await createTodo(todo);
    console.log(todor);
    console.log(await getTodo(567));
}
mainFunc();



