document.getElementById("startButton").addEventListener("click", function() {

  document.getElementById("message").textContent = "タイマー開始だよ";

  setTimeout(function() {
    document.getElementById("message").textContent = "そろそろ休憩せーへん？";
  }, 2000);

});
