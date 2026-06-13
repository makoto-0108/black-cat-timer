document.addEventListener("DOMContentLoaded", function () {

  const startButton = document.getElementById("startButton");
  const timerDisplay = document.getElementById("timer");

  let timerInterval;

  startButton.addEventListener("click", function () {

    clearInterval(timerInterval);

    let timeLeft = 10; // テスト用10秒

    timerInterval = setInterval(function () {

      timerDisplay.textContent = timeLeft;

      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(timerInterval);
      }

    }, 1000);

  });

});document.addEventListener("DOMContentLoaded", function () {

  alert("JS読めてる");

  const startButton = document.getElementById("startButton");

  startButton.addEventListener("click", function () {
    alert("スタート押された");
  });

});
