import Player from "./player.js";
import ProjectilesScheme from "./projectilesScheme.js";
import BallshipSprite from "./ballship_sprite.js";
import SpinnerSprite from "./spinner_sprite.js";
import CruiserSprite from "./cruiser_sprite.js";
let canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const gameEndScreen = document.getElementById("end-screen");
const gameScreen = document.getElementById("game-screen");

const projectileScheme = new ProjectilesScheme(canvas);
const player = new Player(
  canvas.width / 2.8,
  canvas.height / 0.3,
  projectileScheme
);

const ballshipSprite = new BallshipSprite(
  canvas.width / 0.3,
  canvas.height / 1.5,
  canvas.enemyProjectile,
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
  canvas.width / 0.3,
  canvas.height / 1.5,
  canvas.enemyProjectile,
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
  canvas.width / 0.3,
  canvas.height / 0.5,
  canvas.enemyProjectile,
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

canvas.width = 1200;
canvas.height = 800;

let bgImage = new Image();
bgImage.src = "images/gameBG.png";

let scrollSpeed = 70;
let x = 0;
let enemyArray = [spinnerSprite, ballshipSprite, cruiserSprite];

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //screen
  ctx.drawImage(bgImage, x, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImage, x + canvas.width, 0, canvas.width, canvas.height);

  //game elements
  projectileScheme.draw(ctx);
  player.draw(ctx);

  enemyArray.forEach((enemy) => {
    if (enemy instanceof CruiserSprite) {
      let cruiserSpriteWidth = 150;
      let cruiserSpriteHeight = 100;
      enemy.update();
      enemy.draw(
        ctx,
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
        ctx,
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
        ctx,
        enemy.x,
        enemy.y,
        ballshipSpriteWidth,
        ballshipSpriteHeight
      );
    }
  });

  x -= scrollSpeed;
  if (x <= -canvas.width) x = 0;

  enemyArray.forEach((enemy) => {
    projectileScheme.projectileRemove(enemy);
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

  enemyArray.forEach((enemy) => {
    if (enemy.health <= 0) {
      const index = enemyArray.indexOf(enemy);
      enemyArray.splice(index, 1);

      enemy.delete(ctx);
    }
  });

  if (enemyArray.length === 0) {
    gameScreen.style.display = "none";
    gameEndScreen.style.display = "block";
  }

  requestAnimationFrame(gameLoop);
}

bgImage.onload = function () {
  requestAnimationFrame(gameLoop);
};
