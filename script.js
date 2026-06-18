alert(Notification.permission);

let timerInterval;

// 通知許可
if ("Notification" in window) {
  Notification.requestPermission();
}

// 通知関数
function sendNotification(title, message) {

  if (Notification.permission === "granted") {

    new Notification(title, {
      body: message,
      icon: "cat.png"
    });

  }

}

// スタート
document.getElementById("startButton").addEventListener("click", function () {

  clearInterval(timerInterval);

  let timeLeft = 60 * 60;

  const timerDisplay =
    document.getElementById("timerDisplay");

  const catSpeech =
    document.getElementById("catSpeech");

  catSpeech.textContent =
    "スマホぼちぼちにね";

  timerInterval = setInterval(function () {

    let minutes =
      Math.floor(timeLeft / 60);

    let seconds =
      timeLeft % 60;

    timerDisplay.textContent =
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");

    // テスト（開始から約10秒後）
    if (timeLeft === 3590) {

      alert("通知テスト");

      catSpeech.textContent =
        "ちょっと休憩するにゃ";

      sendNotification(
        "🐈‍⬛ 黒猫タイマー",
        "休憩せーへん？"
      );

    }

    // 30分経過
    if (timeLeft === 30 * 60) {

      catSpeech.textContent =
        "休憩せーへん？";

    }

    // 終了
    if (timeLeft <= 0) {

      catSpeech.textContent =
        "今日はここまでにしとこか";

      sendNotification(
        "🐈‍⬛ 黒猫タイマー",
        "おつかれさま🐈‍⬛"
      );

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
