window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const startScreen = document.getElementById("start-screen");
  const gameEndScreen = document.getElementById("end-screen");

  const game = new Game(startScreen, gameEndScreen);

  startButton.addEventListener("click", function () {
    game.start();
  });
  restartButton.addEventListener("click", function () {
    game.restart();
  });
};
