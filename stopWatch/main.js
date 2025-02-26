let isRunning = false;
let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const display = document.querySelector('.display')
const starStopBtn = document.querySelector('.startStop')
const resetBtn = document.querySelector('.resetBtn')


const fotmatTime = () => {
    let minuteStr = minutes < 10 ? `0${minutes}` : minutes;
    let secontStr = seconds < 10 ? `0${seconds}` : seconds;
    let millisecondsStr = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
    return `${minuteStr}:${secontStr}:${millisecondsStr}`
}

const startStopwatch = () => {
     timer = setInterval(() => {
        milliseconds++;
        if(milliseconds >= 100) {
            milliseconds = 0;
            seconds ++;
        }

        if(minutes >= 60) {
            seconds = 0;
            minutes ++;
        }

        display.textContent= fotmatTime()
    }, 10)
}

function stopStopwatch() {
    clearInterval(timer);
  }

  starStopBtn.addEventListener('click', () => {
    if(isRunning) {
        stopStopwatch()
        starStopBtn.textContent = "Start";
    } else {
        startStopwatch()
        starStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
  })

  resetBtn.addEventListener("click", () => {
    stopStopwatch();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    display.textContent = fotmatTime();
    starStopBtn.textContent = "Start";
    isRunning = false;
  });