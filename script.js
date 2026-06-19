let timerInterval;

// 黒猫のセリフ
const catMessages = [
  "スマホぼちぼちにね",
  "休憩せーへん？",
  "水飲みや〜",
  "目ぇ疲れてへん？",
  "肩回してみよか",
  "ちょっと立ってみる？",
  "深呼吸しとこか",
  "よう頑張っとるな",
  "無理したらあかんで",
  "まだ見てるん？🐈‍⬛"
];

// ランダム表示
function randomCatMessage() {

  const randomIndex =
    Math.floor(Math.random() * catMessages.length);

  return catMessages[randomIndex];

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
    randomCatMessage();

  timerInterval = setInterval(function () {

    let minutes =
      Math.floor(timeLeft / 60);

    let seconds =
      timeLeft % 60;

    timerDisplay.textContent =
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");

    // 30分経過
    if (timeLeft === 30 * 60) {

      catSpeech.textContent =
        randomCatMessage();

    }

    // 1分ごとにランダム表示（不要なら削除OK）
    if (timeLeft % 60 === 0) {

      catSpeech.textContent =
        randomCatMessage();

    }

    // 終了
    if (timeLeft <= 0) {

      catSpeech.textContent =
        "今日はここまでにしとこか🐈‍⬛";

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
    randomCatMessage();

});
