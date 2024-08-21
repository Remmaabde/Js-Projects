const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecLabel = document.getElementById('millisec');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

const laplist = document.getElementById('laplist');

let minutes = 0;
let seconds = 0;
let millisecond = 0;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  interval = setInterval(updateTimer, 10);
  startButton.disabled = true;
}

function stopTimer() {
  clearInterval(interval);
}

function pauseTimer() {
  clearInterval(interval);
  pauseButton.disabled = true;
}

function resetTimer() {}
function updateTimer() {
  millisecond++;
  if (millisecond === 100) {
    millisecond = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayTimer();
}
function displayTimer() {
  millisecLabel.textContent = padTime(millisecond);
  secondsLabel.textContent = padTime(seconds);
  minutesLabel.textContent = padTime(minutes);
}

function padTime(time) {
  return time.toString().padStart(2, '0');
}
