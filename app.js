document.getElementById("startButton").addEventListener("click", function () {

  let timeLeft = 60 * 60;
  const timerDisplay = document.getElementById("timer");
  const message = document.getElementById("message");

  message.textContent = "タイマー開始やで";

  const interval = setInterval(function () {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");

    if (timeLeft === 30 * 60) {
      message.textContent = "休憩せーへん？";
    }

    if (timeLeft === 0) {
      message.textContent = "今日はここまでにしとこか";
      clearInterval(interval);
    }

    timeLeft--;

  }, 1000);

});

let idleTimer;

// 無操作リセット関数
function resetIdleTimer() {
  clearTimeout(idleTimer);

  idleTimer = setTimeout(function () {
    document.getElementById("message").textContent =
      "まだ見てるん？ちょっと休憩せーへん？";
  }, 10000); // 10秒でテスト（あとで変更OK）
}

// ユーザーの操作を検知
document.addEventListener("mousemove", resetIdleTimer);
document.addEventListener("keydown", resetIdleTimer);
document.addEventListener("touchstart", resetIdleTimer);

// 初期起動
resetIdleTimer();
let timerInterval;

document.getElementById("startButton").addEventListener("click", function () {

  // ★これが超重要：前のタイマーを止める
  clearInterval(timerInterval);

  let timeLeft = 60 * 60;
  const timerDisplay = document.getElementById("timer");
  const message = document.getElementById("message");

  message.textContent = "タイマー開始やで";

  timerInterval = setInterval(function () {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");

    if (timeLeft === 30 * 60) {
      message.textContent = "休憩せーへん？";
    }

    if (timeLeft === 0) {
      message.textContent = "今日はここまでにしとこか";
      clearInterval(timerInterval);
    }

    timeLeft--;

  }, 1000);

});
