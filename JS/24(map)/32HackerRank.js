const a = [
    "Initializating Hack Tool....",
    "Connecting to Facebook....",
    "Connecting to server....",
    "Connection Failed, Retrying....",
    "Connected Successfully....",
    "User name iamKisna....",
    "Trying Brute force....",
    "200k passwords tried....",
    "Match not Found....",
    "Another 200k passwords tried....",
    "Match Found....",
    "Accessing Account....",
    "hacked successfull!",
]

const sleep = async(seconds) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(true);
        }, seconds*1000)
    })
}
const showHack = async(message) =>{
    await sleep(2);
    // console.log(message);
    text.innerHTML = text.innerHTML + message+ "<br>"
}

//immediately invoked function expression
(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i]);
    }
})();