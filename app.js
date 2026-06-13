document.addEventListener("DOMContentLoaded", function () {

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const timerDisplay = document.getElementById("timer");

let timerInterval;

startButton.addEventListener("click", function () {

```
clearInterval(timerInterval);

let timeLeft = 60 * 60;

timerInterval = setInterval(function () {

  timerDisplay.textContent = timeLeft;

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
  }

}, 1000);
```

});

stopButton.addEventListener("click", function () {

```
alert("ストップ押された");

clearInterval(timerInterval);

timerDisplay.textContent = "停止中";
```

});

});
