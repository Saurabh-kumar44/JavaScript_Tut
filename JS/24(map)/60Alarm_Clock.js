function play() {
    var audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/09/audio_6cc3dd63b8.mp3?filename=tic-tac-27828.mp3');
    audio.play();
}
  
setInterval(()=>{
    let d = new Date()
    time.innerHTML = d.toDateString() + " " + d.toTimeString();
},1000)

const setAlarm = (seconds) => {
    let d = new Date().getTime()
        setTimeout(()=>{
        play();
    }, seconds * 1000)

    setInterval(() => {
        secondLeft = -((new Date().getTime()) - (d + seconds * 1000))
        if(secondLeft>0){
            alarm.innerHTML = "Alarm ringing in " + Math.floor(secondLeft/1000) + " seconds";
        }
    })
}
let s = prompt("for how many seconds you want to set alarm?")
setAlarm(parseInt(s));