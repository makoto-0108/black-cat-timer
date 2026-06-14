let time = 60 * 60;
let timer = null;

const display = document.getElementById("timerDisplay");

function updateDisplay() {
  const min = String(Math.floor(time / 60)).padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");
  display.textContent = `${min}:${sec}`;
}

document.getElementById("startButton").addEventListener("click", () => {
  if (timer) return;

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timer);
      timer = null;
    }
  }, 1000);
});

document.getElementById("stopButton").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("resetButton").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  time = 60 * 60;
  updateDisplay();
});

updateDisplay();
