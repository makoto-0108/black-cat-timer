let timerInterval;

document.getElementById("startButton").addEventListener("click", function () {

// タイマー開始メッセージ
document.getElementById("message").textContent = "タイマー開始やで";

// 60分 = 3600秒
let timeLeft = 60 * 60;

const timerDisplay = document.getElementById("timer");

// 既存タイマー停止
clearInterval(timerInterval);

timerInterval = setInterval(function () {

```
let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;

timerDisplay.textContent =
  String(minutes).padStart(2, "0") +
  ":" +
  String(seconds).padStart(2, "0");

// 30分経過
if (timeLeft === 30 * 60) {
  document.getElementById("message").textContent = "休憩せーへん？";
}

// 60分終了
if (timeLeft === 0) {
  document.getElementById("message").textContent = "今日はここまでにしとこか";
  clearInterval(timerInterval);
}

timeLeft--;
```

}, 1000);

});
