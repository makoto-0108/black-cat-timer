document.getElementById("startButton").addEventListener("click", function () {

  let timeLeft = 60 * 60; // 60分
  const timerDisplay = document.getElementById("timer");
  const message = document.getElementById("message");

  message.textContent = "タイマー開始やで";

  const interval = setInterval(function () {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");

    // 30分
    if (timeLeft === 30 * 60) {
      message.textContent = "休憩せーへん？";
    }

    // 終了
    if (timeLeft === 0) {
      message.textContent = "今日はここまでにしとこか";
      clearInterval(interval);
    }

    timeLeft--;

  }, 1000);

  const timerDisplay = document.getElementById("timer");

});

let idleTimer;

// ユーザー操作があるたびリセット
function resetIdleTimer() {
  clearTimeout(idleTimer);

  idleTimer = setTimeout(function () {
    document.getElementById("message").textContent = "まだ見てるん？ちょっと休憩せーへん？";
  }, 30000); // 30秒操作なしで発火（テスト用）
}

// 画面触ったらリセット
document.addEventListener("mousemove", resetIdleTimer);
document.addEventListener("keydown", resetIdleTimer);
document.addEventListener("touchstart", resetIdleTimer);

// 初期起動
resetIdleTimer();
