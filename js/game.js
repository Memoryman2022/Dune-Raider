import Player from "./player.js";
import ProjectilesScheme from "./projectilesScheme.js";
import BallshipSprite from "./ballship_sprite.js";
import SpinnerSprite from "./spinner_sprite.js";
import CruiserSprite from "./cruiser_sprite.js";

export default class Game {
  constructor() {
    this.canvas = document.getElementById("game-canvas");
    this.canvas.width = 1200;
    this.canvas.height = 800;
    this.ctx = this.canvas.getContext("2d");
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("end-screen");
    this.animationFrameId = null;

    this.bgImage = new Image();
    this.bgImage.src = "images/gameBG.png";

    this.gameLoop = this.gameLoop.bind(this);

    const ballshipSprite = new BallshipSprite(
      this.canvas.width / 0.3,
      this.canvas.height / 1.5,
      this.canvas.enemyProjectile,
      120,
      120,
      1000,
      1,
      [
        "images/ballship.sprite/0000.png",
        "images/ballship.sprite/0001.png",
        "images/ballship.sprite/0002.png",
        "images/ballship.sprite/0003.png",
        "images/ballship.sprite/0004.png",
        "images/ballship.sprite/0005.png",
        "images/ballship.sprite/0006.png",
        "images/ballship.sprite/0007.png",
        "images/ballship.sprite/0008.png",
        "images/ballship.sprite/0009.png",
        "images/ballship.sprite/0010.png",
        "images/ballship.sprite/0011.png",
        "images/ballship.sprite/0012.png",
        "images/ballship.sprite/0013.png",
        "images/ballship.sprite/0014.png",
        "images/ballship.sprite/0015.png",
        "images/ballship.sprite/0016.png",
        "images/ballship.sprite/0017.png",
        "images/ballship.sprite/0018.png",
        "images/ballship.sprite/0019.png",
        "images/ballship.sprite/0020.png",
        "images/ballship.sprite/0021.png",
        "images/ballship.sprite/0022.png",
        "images/ballship.sprite/0023.png",
        "images/ballship.sprite/0024.png",
        "images/ballship.sprite/0025.png",
        "images/ballship.sprite/0026.png",
        "images/ballship.sprite/0027.png",
        "images/ballship.sprite/0028.png",
        "images/ballship.sprite/0029.png",
        "images/ballship.sprite/0030.png",
      ],
      30
    );

    // spinner

    const spinnerSprite = new SpinnerSprite(
      this.canvas.width / 0.3,
      this.canvas.height / 1.5,
      this.canvas.enemyProjectile,
      80,
      50,
      20,
      1,
      [
        "images/spinner.sprite/0000.png",
        "images/spinner.sprite/0001.png",
        "images/spinner.sprite/0002.png",
        "images/spinner.sprite/0003.png",
        "images/spinner.sprite/0004.png",
        "images/spinner.sprite/0005.png",
        "images/spinner.sprite/0006.png",
        "images/spinner.sprite/0007.png",
        "images/spinner.sprite/0008.png",
        "images/spinner.sprite/0009.png",
        "images/spinner.sprite/0010.png",
        "images/spinner.sprite/0011.png",
        "images/spinner.sprite/0012.png",
        "images/spinner.sprite/0013.png",
        "images/spinner.sprite/0014.png",
        "images/spinner.sprite/0015.png",
        "images/spinner.sprite/0016.png",
        "images/spinner.sprite/0017.png",
        "images/spinner.sprite/0018.png",
        "images/spinner.sprite/0019.png",
        "images/spinner.sprite/0020.png",
        "images/spinner.sprite/0021.png",
        "images/spinner.sprite/0022.png",
        "images/spinner.sprite/0023.png",
        "images/spinner.sprite/0024.png",
        "images/spinner.sprite/0025.png",
        "images/spinner.sprite/0026.png",
        "images/spinner.sprite/0027.png",
        "images/spinner.sprite/0028.png",
        "images/spinner.sprite/0029.png",
        "images/spinner.sprite/0030.png",
      ],
      80
    );

    // cruiser

    const cruiserSprite = new CruiserSprite(
      this.canvas.width / 0.3,
      this.canvas.height / 0.5,
      this.canvas.enemyProjectile,
      100,
      50,
      20,
      1,
      [
        "images/cruiser.sprite/0000.png",
        "images/cruiser.sprite/0001.png",
        "images/cruiser.sprite/0002.png",
        "images/cruiser.sprite/0003.png",
        "images/cruiser.sprite/0004.png",
        "images/cruiser.sprite/0005.png",
        "images/cruiser.sprite/0006.png",
        "images/cruiser.sprite/0007.png",
        "images/cruiser.sprite/0008.png",
        "images/cruiser.sprite/0009.png",
        "images/cruiser.sprite/0010.png",
        "images/cruiser.sprite/0011.png",
        "images/cruiser.sprite/0012.png",
        "images/cruiser.sprite/0013.png",
        "images/cruiser.sprite/0014.png",
        "images/cruiser.sprite/0015.png",
        "images/cruiser.sprite/0016.png",
        "images/cruiser.sprite/0017.png",
        "images/cruiser.sprite/0018.png",
        "images/cruiser.sprite/0019.png",
        "images/cruiser.sprite/0020.png",
        "images/cruiser.sprite/0021.png",
        "images/cruiser.sprite/0022.png",
        "images/cruiser.sprite/0023.png",
        "images/cruiser.sprite/0024.png",
        "images/cruiser.sprite/0025.png",
        "images/cruiser.sprite/0026.png",
        "images/cruiser.sprite/0027.png",
        "images/cruiser.sprite/0028.png",
        "images/cruiser.sprite/0029.png",
        "images/cruiser.sprite/0030.png",
      ],
      30
    );

    this.enemyArray = [cruiserSprite, spinnerSprite, ballshipSprite];
  }

  scrollSpeed = 70;
  x = 0;

  initializeGameEntities() {
    this.projectileScheme = new ProjectilesScheme(this.canvas);
    this.player = new Player(
      this.canvas.width / 2.8,
      this.canvas.height / 0.3,
      this.projectileScheme
    );

    console.log(this.player);
  }

  startGame() {
    console.log("start game");
    this.gameScreen.style.display = "block";
    this.startScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.initializeGameEntities();
    this.gameLoop();
  }

  gameLoop() {
    console.log("start game loop");
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //screen
    this.ctx.drawImage(
      this.bgImage,
      this.x,
      0,
      this.canvas.width,
      this.canvas.height
    );
    this.ctx.drawImage(
      this.bgImage,
      this.x + this.canvas.width,
      0,
      this.canvas.width,
      this.canvas.height
    );

    //game elements
    this.projectileScheme.draw(this.ctx);
    this.player.draw(this.ctx);

    this.enemyArray.forEach((enemy) => {
      if (enemy instanceof CruiserSprite) {
        console.log(this.enemyArray);
        let cruiserSpriteWidth = 150;
        let cruiserSpriteHeight = 100;
        enemy.update();
        enemy.draw(
          this.ctx,
          enemy.x,
          enemy.y,
          cruiserSpriteWidth,
          cruiserSpriteHeight
        );
      }

      if (enemy instanceof SpinnerSprite) {
        let spinnerSpriteWidth = 100;
        let spinnerSpriteHeight = 100;
        enemy.update();
        enemy.draw(
          this.ctx,
          enemy.x,
          enemy.y,
          spinnerSpriteWidth,
          spinnerSpriteHeight
        );
      }

      if (enemy instanceof BallshipSprite) {
        let ballshipSpriteWidth = 150;
        let ballshipSpriteHeight = 150;
        enemy.update();
        enemy.draw(
          this.ctx,
          enemy.x,
          enemy.y,
          ballshipSpriteWidth,
          ballshipSpriteHeight
        );
      }
    });

    this.x -= this.scrollSpeed;
    if (this.x <= -this.canvas.width) this.x = 0;

    this.enemyArray.forEach((enemy) => {
      this.projectileScheme.projectileRemove(enemy);
    });

    // const enemies = [new Enemy(ballshipSprite)];
    // enemies.forEach((enemy) => {
    //   if (projectileScheme.projectileCollision(enemy)) {
    //     if (enemy.health <= 0) {
    //       const index = enemies.indexOf(enemy);
    //       enemies.splice(index, 1);
    //     }
    //   } else {
    //     enemyImage.draw(ctx);
    //   }
    // });

    this.enemyArray.forEach((enemy) => {
      if (enemy.health <= 0) {
        const index = enemyArray.indexOf(enemy);
        enemyArray.splice(index, 1);

        enemy.delete(ctx);
      }
    });

    if (this.enemyArray.length === 0) {
      console.log("end game");
    }

    requestAnimationFrame(this.gameLoop);

    this.bgImage.onload = () => {
      requestAnimationFrame(this.gameLoop());
    };
  }

  gameOver() {
    cancelAnimationFrame(this.animationFrameId);
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }

  restart() {
    // Reset game state and entities
    this.enemyArray = [];
    this.start();
  }
}
