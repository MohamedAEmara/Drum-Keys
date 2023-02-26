window.addEventListener('keydown', function(e){
    // console.log(e);
 //   console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//    console.log(audio);
    if(!audio)
        return;     

    audio.currentTime = 0;   // this will rewind to the start

    audio.play();    // it plays the audio associated to that key
                        // but if the audio is already playing --> it won't play again.


    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');

    // apply this function but after 500 ms as a delay 
    setTimeout(() => {
        key.classList.remove('playing');
    }, 500);
    
    // key.classList.remove('playing');
    console.log(key);
    // const haha = document.getElementsByTagName(`audio["${e.keycode}"]`);
    // this.alert(haha);
});

function removeClick(){
    key.classList.remove('playing');
}

function huh(){
    let x = 1;
    return 1;
}

