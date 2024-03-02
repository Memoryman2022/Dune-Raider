let game;
window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const startScreen = document.getElementById("start-screen");
  const gameEndScreen = document.getElementById("end-screen");

  startButton.addEventListener("click", function () {
    if (!game || game.isEnded) {
      game = new Game(startScreen, gameEndScreen);
    }
    game.start();
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
  });

  restartButton.addEventListener("click", function () {
    if (game.restart) {
      game.restart();
    } else {
      game = new Game(startScreen, gameEndScreen);
      game.start();
    }
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
  });
};

const backgroundMusic = new Audio("sounds2/dune_raider.mp3");
backgroundMusic.volume = 0.4;
backgroundMusic.loop = false;
backgroundMusic.addEventListener("ended", function () {
  game.gameOver(true);
});

// function endGame(winning) {
//   if (game) {
//     game.gameOver(winning);
//   }
//   if (winning) {
//     alert(
//       "“Survival is the ability to swim in strange water.” - Bene Gesserit proverb"
//     );
//   } else {
//     alert("“Fear is the mind-killer.”");
//   }

//   startScreen.style.display = "none";
//   gameScreen.style.display = "none";
//   gameEndScreen.style.display = "block";
// }
