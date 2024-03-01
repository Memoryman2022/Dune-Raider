class Game {
  constructor(startScreen, endScreen) {
    this.startScreen = startScreen;
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = endScreen;
    this.endMessageElement = this.gameEndScreen.querySelector("#dune-quote");
  }

  start() {
    this.gameScreen.style.height = "1200px";
    this.gameScreen.style.width = "1600px";
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
  }

  restart() {
    window.location.reload();
  }

  gameOver(winning) {
    let quote = winning
      ? "“Survival is the ability to swim in strange water.” - Bene Gesserit proverb"
      : "“Fear is the mind-killer.”";
    this.endMessageElement.textContent = quote;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
