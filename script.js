let timerInterval;

// スタート
document.getElementById("startButton").addEventListener("click", function () {

  clearInterval(timerInterval);

  let timeLeft = 60 * 60;

  const timerDisplay =
    document.getElementById("timerDisplay");

  const catSpeech =
    document.getElementById("catSpeech");

  catSpeech.textContent =
    "タイマー開始にゃ";

  timerInterval = setInterval(function () {

    let minutes =
      Math.floor(timeLeft / 60);

    let seconds =
      timeLeft % 60;

    timerDisplay.textContent =
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");

    // 10秒後テスト
    if (timeLeft === 3590) {

      alert("10秒経過したにゃ");

      catSpeech.textContent =
        "休憩せーへん？";

    }

    // 30分経過
    if (timeLeft === 30 * 60) {

      catSpeech.textContent =
        "ちょっと休憩するにゃ";

    }

    // 終了
    if (timeLeft <= 0) {

      catSpeech.textContent =
        "今日はここまでにしとこか";

      clearInterval(timerInterval);

      return;
    }

    timeLeft--;

  }, 1000);

});

// 停止
document.getElementById("stopButton").addEventListener("click", function () {

  clearInterval(timerInterval);

  document.getElementById("catSpeech").textContent =
    "おつかれさま。またね🐈‍⬛";

});

// リセット
document.getElementById("resetButton").addEventListener("click", function () {

  clearInterval(timerInterval);

  document.getElementById("timerDisplay").textContent =
    "60:00";

  document.getElementById("catSpeech").textContent =
    "スマホぼちぼちにね";

});
