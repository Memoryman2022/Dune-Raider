window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const startScreen = document.getElementById("start-screen");
  const gameEndScreen = document.getElementById("end-screen");

  startButton.addEventListener("click", function () {
    const game = new Game(startScreen, gameEndScreen);
    game.start();
  });
  restartButton.addEventListener("click", function () {
    const game = new Game(startScreen, gameEndScreen);
    game.restart();
  });
};
