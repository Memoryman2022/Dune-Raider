window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const startScreen = document.getElementById("start-screen");
  const gameEndScreen = document.getElementById("end-screen");

  startButton.addEventListener("click", function () {
    const game = new Game(startScreen, gameEndScreen);
    game.start();
    backgroundMusic.play();
  });
  restartButton.addEventListener("click", function () {
    const game = new Game(startScreen, gameEndScreen);
    game.restart();
  });
};
const backgroundMusic = new Audio("sounds2/dune_raider.mp3");
backgroundMusic.volume = 0.5;
backgroundMusic.loop = true;
