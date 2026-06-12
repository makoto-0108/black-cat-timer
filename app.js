document.addEventListener("DOMContentLoaded", () => {

const startBtn = document.getElementById("startButton");
const stopBtn = document.getElementById("stopButton");
const timerDisplay = document.getElementById("timer");
const message = document.getElementById("message");

if (!startBtn || !stopBtn || !timerDisplay || !message) {
console.log("要素が見つからない");
return;
}

let timerInterval;

startBtn.addEventListener("click", () => {

```
clearInterval(timerInterval);

let timeLeft = 60 * 60;

message.textContent = "開始したで";

timerInterval = setInterval(() => {

  let m = Math.floor(timeLeft / 60);
  let s = timeLeft % 60;

  timerDisplay.textContent = m + ":" + s;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    message.textContent = "終了やで";
    return;
  }

  timeLeft--;

}, 1000);
```

});

stopBtn.addEventListener("click", () => {
clearInterval(timerInterval);
message.textContent = "止めたで";
});

});
