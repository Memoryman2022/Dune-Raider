class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("end-screen");
  }

  start() {
    this.gameScreen.style.height = "1200px";
    this.gameScreen.style.width = "1600px";
    // Hide the start screen
    this.startScreen.style.display = "none";

    // Show the game screen
    this.gameScreen.style.display = "block";
  }

  restart() {
    this.gameIsOver = false;

    this.gameEndScreen.style.display("none");
    this.gameScreen.style.display("block");

    this.start();
  }
  gameOver() {
    this.gameScreen.style.display = this.gameEndScreen;
  }
}
