console.log("script.js 読み込みOK");

let time = 60 * 60; // 60分
let timer = null;

const display = document.getElementById("timerDisplay");
const speech = document.getElementById("catSpeech");

// --------------------
// タイマー表示更新
// --------------------
function updateDisplay() {
  const min = String(Math.floor(time / 60)).padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");
  display.textContent = `${min}:${sec}`;
}

// --------------------
// セリフ更新（スマホ中断アプリ）
// --------------------
function updateSpeech() {
  if (!speech) return; // 安全対策

  const elapsed = (60 * 60) - time; // 経過時間（秒）

  if (elapsed < 5 * 60) {
    speech.textContent = "スマホ、ちょっと休憩するにゃ";
  } 
  else if (elapsed < 20 * 60) {
    speech.textContent = "スマホ、ぼちぼち離れてみるにゃ";
  } 
  else if (elapsed < 30 * 60) {
    speech.textContent = "そろそろスマホやめてみるにゃ？";
  } 
  else {
    speech.textContent = "スマホ置けたにゃ。えらいにゃ";
  }
}

// --------------------
// 開始ボタン
// --------------------
document.getElementById("startButton").addEventListener("click", () => {
  if (timer) return;

  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
      updateSpeech();
    } else {
      clearInterval(timer);
      timer = null;
      speech.textContent = "終わったにゃ。ちゃんとできたにゃ";
    }
  }, 1000);
});

// --------------------
// 停止ボタン
// --------------------
document.getElementById("stopButton").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;

  if (speech) {
    speech.textContent = "ちょっと休憩するにゃ";
  }
});

// --------------------
// リセットボタン
// --------------------
document.getElementById("resetButton").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;

  time = 60 * 60;

  updateDisplay();

  if (speech) {
    speech.textContent = "準備できてるにゃ";
  }
});

// --------------------
// 初期表示
// --------------------
updateDisplay();
updateSpeech();
