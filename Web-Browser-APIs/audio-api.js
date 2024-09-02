const audio = document.querySelector('#audio');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const currentTime = document.querySelector('#current-time');
const volume = document.querySelector('#volume');

play.addEventListener('click', ()=> audio.play())
pause.addEventListener('click', ()=> audio.pause())
stop.addEventListener('click', ()=> {
    audio.pause();
    audio.currentTime = 0;
// Because there is no Stop function, this is the way, to pause it, and then set the time
// of a audio to 0
});

audio.addEventListener('timeupdate', ()=> {
    currentTime.innerText = audio.currentTime;
// shows the current time of the song going
})

volume.addEventListener('change', ()=> audio.volume = volume.value)