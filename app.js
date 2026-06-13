document.addEventListener("DOMContentLoaded", function () {

  const startButton = document.getElementById("startButton");
  const timerDisplay = document.getElementById("timer");

  let timerInterval;

  startButton.addEventListener("click", function () {

    clearInterval(timerInterval);

    let timeLeft = 60 * 60;

    timerInterval = setInterval(function () {

      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(timerInterval);
      }

    }, 1000);

  });

});
