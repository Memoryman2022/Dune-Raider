import Game from "./game.js";

window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const game = new Game();

  startButton.addEventListener("click", function () {
    game.startGame();
  });
  restartButton.addEventListener("click", function () {
    game.startGame();
  });

  // function stopGame() {
  //   game.stop();
  // }
};
