document.addEventListener("DOMContentLoaded", function () {

  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const resetButton = document.getElementById("resetButton");
  const timerDisplay = document.getElementById("timer");
  const message = document.getElementById("message");

  let timerInterval;
  let timeLeft = 60 * 60;
  let isRunning = false;

  function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timerDisplay.textContent =
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");
  }

  updateDisplay();

  startButton.addEventListener("click", function () {

    if (isRunning) return;

    message.textContent = "タイマー開始やで";
    isRunning = true;

    timerInterval = setInterval(function () {

      timeLeft--;
      updateDisplay();

      if (timeLeft === 30 * 60) {
        message.textContent = "休憩せーへん？";
      }

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        message.textContent = "今日はここまでにしとこか🐈‍⬛";
        isRunning = false;
      }

    }, 1000);

  });

  stopButton.addEventListener("click", function () {

    clearInterval(timerInterval);
    isRunning = false;

    message.textContent = "停止したで";

  });

  resetButton.addEventListener("click", function () {

    clearInterval(timerInterval);
    isRunning = false;

    timeLeft = 60 * 60;

    updateDisplay();

    message.textContent = "リセットしたで";

  });

});
