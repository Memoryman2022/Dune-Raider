window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const game = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    game.gameEndScreen.style.display = "none";
    game.gameScreen.style.display = "block";
  });
  function startGame() {
    game.start();
  }
};
