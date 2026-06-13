document.addEventListener("DOMContentLoaded", function () {

  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const timerDisplay = document.getElementById("timer");
  const message = document.getElementById("message");

  let timerInterval;
  let timeLeft = 60 * 60;

  // 初期表示（ここがポイント）
  function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");
  }

  updateDisplay();

  startButton.addEventListener("click", function () {

    clearInterval(timerInterval);

    message.textContent = "タイマー開始やで";

    timerInterval = setInterval(function () {

      timeLeft--;

      updateDisplay();

      // 30分
      if (timeLeft === 30 * 60) {
        message.textContent = "休憩せーへん？";
      }

      // 0分
      if (timeLeft <= 0) {
        message.textContent = "今日はここまでにしとこか🐈‍⬛";
        clearInterval(timerInterval);
      }

    }, 1000);

  });

  stopButton.addEventListener("click", function () {

    clearInterval(timerInterval);

    timeLeft = 60 * 60;
    updateDisplay();

    message.textContent = "停止したで";

  });

});
