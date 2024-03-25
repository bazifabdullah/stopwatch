let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let Interval;
const appendMin = document.getElementById('min');
const appendSec = document.getElementById('sec');
const appendMilisec = document.getElementById('milisec');
const stopBtn = document.getElementById('stop-btn')
const startBtn = document.getElementById('start-btn')
const resetBtn = document.getElementById('reset-btn')

startBtn.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

stopBtn.onclick = () => {
    clearInterval(Interval);
    if (miliseconds != 0) {
        startBtn.innerHTML = 'Continue'
    }
}

resetBtn.onclick = () => {
    clearInterval(Interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    appendMilisec.innerHTML = `0${miliseconds}`;
    appendSec.innerHTML = `0${seconds}`;
    appendMin.innerHTML = `0${minutes}`;
    startBtn.innerHTML = 'Start'
}

function startTimer() {
    miliseconds++;

    if (miliseconds <= 9) {
        appendMilisec.innerHTML = `0${miliseconds}`;
    }
    if (miliseconds > 9) {
        appendMilisec.innerHTML = miliseconds;
    }
    if (miliseconds === 99) {
        miliseconds = 0;
        seconds += 1;
        appendSec.innerHTML = `0${seconds}`;
    }
    if (seconds > 9) {
        appendSec.innerHTML = seconds;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
        appendMin.innerHTML = `0${minutes}`;
    }
    if (minutes > 9) {
        appendMin.innerHTML = minutes;
    }
}