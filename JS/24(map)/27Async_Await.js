// async function kisna(){
//     return 5;
// }
// kisna().then((x)=>{//here .then() function working it means the async function return the promise(if async remove then error occured(.then() is not a function) which confirm that it return promise)
//     // alert(x);
// })


async function kisna(){
    let delhiWeather = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("27 degrees");
        },2000)
    })
    let bangloreWeather = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("21 degrees");
        },5000)
    })
    // delhiWeather.then(alert); //the resolve value is get into the alert
    // bangloreWeather.then(alert);//the resolve value is get into the alert

    console.log("Fetching delhi's weather please wait...");
    let delhiW = await delhiWeather;// here resolve promise came here and waits until the next promise came and waits(or we can say the fullfilled promise came here and wait) we can make the promised waits for a time
    console.log("Fetched delhi's weather: "+delhiW);

    console.log("Fetching banglore's weather please wait...");
    let bangloreW = await bangloreWeather;
    console.log("Fetched banglore's: " +bangloreW);
    return [delhiW, bangloreW];

}

const krishna =()=>{
    console.log("hey i am krishna and im not waiting"); 
}
console.log("Welcome to weather control room!");
kisna();
let a = kisna();
let b = krishna();//all the process runs parallely
// console.log(a);
a.then((value)=>{
    console.log(value);
})

//so due to await we can actually make the execution wait 
// const krishna = async ()=>{
//     console.log("hey i am krishna and im not waiting"); 
// }

// const main1 = async () =>{
//     console.log("Welcome to weather control room!");
//     let a = await kisna(); //here now first kisna will runs and the krishna because we use await(so no parallel execution takes place)
//     let b = await krishna();

// }