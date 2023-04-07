let a = fetch("https://api.tvmaze.com/search/shows?q=girls");
// p.then((response)=>{()=> response.json})
// .then((response)=>{console.log(response)});

//Fetch Api is a two stage process(thats why two .then() are there)
// 1- An object of ressponse class containing "status" & "ok" properties
        // status - The http status code ex:200
        // ok     - Boolean, true fi the HTTP status code is 200-299
// 2- After that we need to call another method to access the ody in different formats
        // response.text() - Read & return the text
        // response.json() - parse the response as JSON

    //Another method include response.fromData(), response.blop(), response.arrayBuffer() 

a.then((response)=>{
    console.log(response.status); //First this promise will resolve which give status  
    console.log(response.ok);
    // console.log(response.text());
    console.log(response.headers);
    return response.json();       //Then this promise resolve in Json value(response)
}).then((value2)=>{            
    console.log(value2);
})