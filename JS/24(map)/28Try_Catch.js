setTimeout(()=>{
    console.log("Hacking Wifi.... please wait....");
},1000)

// console.log(rahul);//as here occured error and the upcoming code will not run due to this so we use try catch

// try{
//     console.log(rahul);
// }
// catch(error){
//     console.log(error);
// }

//try catch works synchronously , if an exception happen in scheduled code like in setTimeout , then try catch wont catch it
try{
    setTimeout(()=>{
        console.log(rahul); //now error occured because now it is scheduled(to prevent this we can put try catch inside it)
    },100)
}
catch(error){
    console.log(error);
}

// try{
//     setTimeout(()=>{
//         try{
//             console.log(rahul); //now error occured because now it is scheduled(to prevent this we can put try catch inside it)
//         }
//         catch(error){
//             console.log(error);
//         }
//     },100)
// }

setTimeout(()=>{
    console.log("Fetching username and password... please wait");
},2000)

setTimeout(()=>{
    console.log("Hacking sutsi facebook id... please wait...");
    
},2000)

setTimeout(()=>{
    console.log("username and password of sutsi  (+9134453435) fetched... please wait....");
},2000)