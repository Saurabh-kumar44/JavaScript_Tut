const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(src +" Return success");
        }
        document.head.append(script);
    })
}

// //Loading script using .then() method
// let a =loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
// a.then((value)=>{
//     console.log(value);
// })

// //Loading script using async await
// const main1 = async () => {
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }
// main1();


//Practice number 3
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("This script is not acceptable"));
    }, 2000);
})
