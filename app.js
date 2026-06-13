document.addEventListener("DOMContentLoaded", function () {

  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const timerDisplay = document.getElementById("timer");
  const message = document.getElementById("message");

  let timerInterval;

  startButton.addEventListener("click", function () {

    clearInterval(timerInterval);

    let timeLeft = 60 * 60;

    message.textContent = "タイマー開始やで";

    timerInterval = setInterval(function () {

      // 表示更新
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      timerDisplay.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

      // 30分メッセージ
      if (timeLeft === 30 * 60) {
        message.textContent = "休憩せーへん？";
      }

      // 終了メッセージ（60分）
      if (timeLeft <= 0) {
        message.textContent = "今日はここまでにしとこか🐈‍⬛";
        clearInterval(timerInterval);
        return;
      }

      timeLeft--;

    }, 1000);

  });

  stopButton.addEventListener("click", function () {

    clearInterval(timerInterval);

    timerDisplay.textContent = "60:00";
    message.textContent = "停止したで";

  });

});
