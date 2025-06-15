const timerContainer = document.getElementById("timer-container");
const stopButton = document.getElementById("stop");
let sec = 0;
let min = 0;
let hour = 0;
// let timer = null;

// const timer = setInterval(increment, 1000);

// console.log(timer);

function increment() {
  sec++;
  if (sec % 60 === 0) {
    sec = 0;
    min++;
  }
  if (min !== 0 && min % 60 === 0) {
    hour++;
  }
  timerContainer.innerText = `${hour}:${min}:${sec}`;
}

const startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(increment, 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(timer); // Stop the timer
  timer = null; // Reset timer so we can restart it
  sec = 0;
  min = 0;
  hour = 0;
  timerContainer.innerText = "0:0:0"; // Reset the display
});
