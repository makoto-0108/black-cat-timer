alert("JS読めてる");

document.addEventListener("DOMContentLoaded", function () {

  const startBtn = document.getElementById("startButton");
  const stopBtn = document.getElementById("stopButton");
  const timerDisplay = document.getElementById("timer");
  const message = document.getElementById("message");

  let timerInterval;

  startBtn.addEventListener("click", function () {

    clearInterval(timerInterval);

    let timeLeft = 60 * 60;

    message.textContent = "開始";

    timerInterval = setInterval(function () {

      let m = Math.floor(timeLeft / 60);
      let s = timeLeft % 60;

      timerDisplay.textContent = m + ":" + s;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        message.textContent = "終了";
        return;
      }

      timeLeft--;

    }, 1000);

  });

  stopBtn.addEventListener("click", function () {
    clearInterval(timerInterval);
    message.textContent = "停止";
  });

});
