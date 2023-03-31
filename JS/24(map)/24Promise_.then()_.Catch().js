let p = new Promise((resolve,reject)=>{
    console.log('Promise is pending');
    setTimeout(()=>{
        console.log("I am promise and i am fulfilled");
        resolve(true)
        console.log(p);//here the promise is fulfilled so now it get value
    },3000)
})

console.log(p);//here yet promise is not fulfilled(So promise show undefined), after 3sec promise get fullfilled and it get a value