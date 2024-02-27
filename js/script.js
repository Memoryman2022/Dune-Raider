import Player from "./player.js";
import ProjectilesScheme from "./projectilesScheme.js";
import Enemy from "./enemy.js";
import Sprite from "./ballship_sprite.js";
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const projectileScheme = new ProjectilesScheme(canvas);
const player = new Player(
  canvas.width / 2.8,
  canvas.height / 0.3,
  projectileScheme
);

//ballShip

const ballshipSprite = new Sprite(
  canvas.width / 0.4,
  canvas.height / 2,
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
  15
);

// spinner

const spinnerSprite = new Sprite(
  canvas.width / 0.3,
  canvas.height / 1.5,
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

const cruiserSprite = new Sprite(
  canvas.width / 0.3,
  canvas.height / 0.5,
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
  20
);

canvas.width = 1200;
canvas.height = 800;

let bgImage = new Image();
bgImage.src = "images/Screenshot 2024-02-26 at 23.51.20.png";

let scrollSpeed = 70;
let x = 0;

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //screen
  ctx.drawImage(bgImage, x, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImage, x + canvas.width, 0, canvas.width, canvas.height);

  //game elements
  projectileScheme.draw(ctx);
  player.draw(ctx);

  ballshipSprite.update();
  let ballshipSpriteWidth = 150;
  let ballshipSpriteHeight = 150;
  ballshipSprite.draw(
    ctx,
    ballshipSprite.x,
    ballshipSprite.y,
    ballshipSpriteWidth,
    ballshipSpriteHeight
  );

  spinnerSprite.update();
  let spinnerSpriteWidth = 100;
  let spinnerSpriteHeight = 100;
  spinnerSprite.draw(
    ctx,
    spinnerSprite.x,
    spinnerSprite.y,
    spinnerSpriteWidth,
    spinnerSpriteHeight
  );

  cruiserSprite.update();
  let cruiserSpriteWidth = 150;
  let cruiserSpriteHeight = 100;
  cruiserSprite.draw(
    ctx,
    cruiserSprite.x,
    cruiserSprite.y,
    cruiserSpriteWidth,
    cruiserSpriteHeight
  );

  x -= scrollSpeed;
  if (x <= -canvas.width) x = 0;

  //collision

  requestAnimationFrame(gameLoop);
}

bgImage.onload = function () {
  requestAnimationFrame(gameLoop);
};
