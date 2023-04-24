//The HTML audioElement Interface can be used to play audio on the browser 

//Q-1 Create a Alarm Clock which displays and play the audio at the user specified Time

function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }
// play(); //with this when we go to the page it show error because user has to interact with the page(like if we click on the page like this) the audio start so we use setTimeout to resolve this setTimeout

setTimeout(()=>{
    play();
},2000)
