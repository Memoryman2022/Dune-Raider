window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const game = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function () {
    console.log("restart game");
    game.restart();
  });
  function startGame() {
    game.start();
  }
  // function stopGame() {
  //   game.stop();
  // }
};
