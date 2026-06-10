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
