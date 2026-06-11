let timerInterval;
let idleTimer;

// スタートボタン
document.getElementById("startButton").addEventListener("click", function () {

// 前のタイマー停止
clearInterval(timerInterval);

let timeLeft = 60 * 60; // 60分

const timerDisplay = document.getElementById("timer");
const message = document.getElementById("message");

message.textContent = "タイマー開始やで";

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
  message.textContent = "休憩せーへん？";
}

// 終了
if (timeLeft === 0) {
  message.textContent = "今日はここまでにしとこか";
  clearInterval(timerInterval);
}

timeLeft--;
```

}, 1000);

});

// ストップボタン
document.getElementById("stopButton").addEventListener("click", function () {

clearInterval(timerInterval);

document.getElementById("message").textContent =
"おつかれさま。またね🐈‍⬛";

});

// 無操作検知
function resetIdleTimer() {

clearTimeout(idleTimer);

idleTimer = setTimeout(function () {

```
document.getElementById("message").textContent =
  "まだ見てるん？ちょっと休憩せーへん？";
```

}, 10000); // テスト用10秒

}

// 操作検知
document.addEventListener("mousemove", resetIdleTimer);
document.addEventListener("keydown", resetIdleTimer);
document.addEventListener("touchstart", resetIdleTimer);

// 初期化
resetIdleTimer();
