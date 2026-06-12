window.addEventListener("DOMContentLoaded", () => {

let timerInterval;
let idleTimer;

const startBtn = document.getElementById("startButton");
const stopBtn = document.getElementById("stopButton");
const timerDisplay = document.getElementById("timer");
const message = document.getElementById("message");

if (!startBtn || !stopBtn || !timerDisplay || !message) {
console.log("要素が見つからない");
return;
}

// スタート
startBtn.addEventListener("click", () => {

clearInterval(timerInterval);

let timeLeft = 60 * 60;

message.textContent = "タイマー開始やで";

timerInterval = setInterval(() => {

```
let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;

timerDisplay.textContent =
  String(minutes).padStart(2, "0") +
  ":" +
  String(seconds).padStart(2, "0");

if (timeLeft === 30 * 60) {
  message.textContent = "休憩せーへん？";
}

if (timeLeft <= 0) {
  message.textContent = "今日はここまでにしとこか";
  clearInterval(timerInterval);
  return;
}

timeLeft--;
```

}, 1000);

});

// ストップ
stopBtn.addEventListener("click", () => {
clearInterval(timerInterval);
message.textContent = "おつかれさま。またね🐈‍⬛";
});

// 無操作
function resetIdleTimer() {
clearTimeout(idleTimer);

idleTimer = setTimeout(() => {
message.textContent = "まだ見てるん？ちょっと休憩せーへん？";
}, 10000);
}

document.addEventListener("mousemove", resetIdleTimer);
document.addEventListener("keydown", resetIdleTimer);
document.addEventListener("touchstart", resetIdleTimer);

resetIdleTimer();

});
