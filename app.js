document.addEventListener("DOMContentLoaded", function () {

  const startButton = document.getElementById("startButton");
  const timerDisplay = document.getElementById("timer");

  startButton.addEventListener("click", function () {

    alert("クリック成功");

    let count = 0;

    setInterval(function () {

      count++;

      alert("カウント " + count);

    }, 1000);

  });

});
