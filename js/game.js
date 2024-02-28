class Game {
  constructor(startScreen, endScreen) {
    this.startScreen = startScreen;
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = endScreen;
  }

  start() {
    this.gameScreen.style.height = "1200px";
    this.gameScreen.style.width = "1600px";
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
  }

  restart() {
    // this.gameEndScreen.style.display = "none";
    // this.gameScreen.style.display = "block";
    window.location.href = "index.html";
  }

  // gameOver() {
  //   this.gameScreen.style.display = this.gameEndScreen;
  // }
}
