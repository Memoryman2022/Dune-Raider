class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    //   this.gameEndScreen = document.getElementById("game-end");
  }

  start() {
    this.gameScreen.style.height = "1200px";
    this.gameScreen.style.width = "1600px";
    // Hide the start screen
    this.startScreen.style.display = "none";

    // Show the game screen
    this.gameScreen.style.display = "block";
  }
}
