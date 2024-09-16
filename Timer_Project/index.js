const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecLabel = document.getElementById('millisec');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

const lapList = document.getElementById('lap-list');

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
  addToLapList();
  resetTimerData();
  startButton.disabled = false;
}

function pauseTimer() {
  clearInterval(interval);
  pauseButton.disabled = true;
}

function resetTimer() {
  clearInterval(interval);
  resetTimerData();
  startButton.disabled = false;
}
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
function resetTimerData() {
  minutes = 0;
  seconds = 0;
  millisecond = 0;
  displayTimer();
}
function addToLapList() {
  const lapTime = `${padTime(minutes)}: ${padTime(seconds)}: ${padTime(
    millisecond
  )}}`;
  const listItem = document.createElement('li');
  listItem.innerHTML = `<span> Lap ${
    lapList.childElementCount + 1
  } : </span> ${lapTime}`;
  lapList.appendChild(listItem);
}
