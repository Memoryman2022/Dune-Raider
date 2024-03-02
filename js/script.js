import Player from "./player.js";
import ProjectilesScheme from "./projectilesScheme.js";
import Projectiles from "./projectiles.js";
import BallshipSprite from "./ballship_sprite.js";
import SpinnerSprite from "./spinner_sprite.js";
import CruiserSprite from "./cruiser_sprite.js";
import Explosion from "./explosion.js";
import Hits from "./hits.js";
let canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const gameEndScreen = document.getElementById("end-screen");
const gameScreen = document.getElementById("game-screen");

// sound
const explode = new Audio("sounds/explode.wav");
explode.volume = 0.2;
const projectileScheme = new ProjectilesScheme(canvas);
const player = new Player(
  canvas.width / 2.8,
  canvas.height / 0.3,
  projectileScheme
);
let playerCollided = false;

//spawn
let lastSpawnTime = Date.now();
function getRandomSpawnInterval(min, max) {
  return Math.random() * (max - min) + min;
}
let spawnInterval = getRandomSpawnInterval(200, 400);

const ballshipSprite = new BallshipSprite(
  canvas.width + 1700,
  Math.random() * canvas.height * 3,
  canvas.enemyProjectile,
  120,
  120,
  2,
  5,
  30
);

// spinner

const spinnerSprite = new SpinnerSprite(
  canvas.width + 1300,
  Math.random() * canvas.height * 4,
  canvas.enemyProjectile,
  80,
  50,
  2,
  1,
  60
);

// cruiser

const cruiserSprite = new CruiserSprite(
  canvas.width + 1300,
  Math.random() * canvas.height * 5,
  canvas.enemyProjectile,
  150,
  100,
  3,
  1,
  30
);

canvas.width = 1200;
canvas.height = 800;

let bgImage = new Image();
bgImage.src = "images/gameBG.png";

let scrollSpeed = 70;
let x = 0;
let enemyArray = [spinnerSprite, ballshipSprite, cruiserSprite];

function collision(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
}

let explosions = [];
const EXPLOSION_FRAME_WIDTH = 64;
const EXPLOSION_FRAME_HEIGHT = 64;
let hits = [];
const HIT_FRAME_WIDTH = 32;
const HIT_FRAME_HEIGHT = 32;

function playExplode() {
  const sound = explode.cloneNode();
  sound.play();
}

function endScreen() {
  setTimeout(() => {
    gameScreen.style.display = "none";
    gameEndScreen.style.display = "block";
  }, 2000);
}
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //screen
  ctx.drawImage(bgImage, x, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImage, x + canvas.width, 0, canvas.width, canvas.height);

  //game elements
  projectileScheme.draw(ctx);
  if (!playerCollided) {
    player.draw(ctx);
  }

  //spawning
  const currentTime = Date.now();
  if (currentTime - lastSpawnTime > spawnInterval) {
    spawnEnemy();
    lastSpawnTime = currentTime;
    spawnInterval = getRandomSpawnInterval(500, 1000);
  }

  function spawnEnemy() {
    const enemyType = Math.floor(Math.random() * 3);
    let enemy;

    const xPosition = canvas.width + Math.random() * 100;
    const yPosition = Math.random() * canvas.height;

    switch (enemyType) {
      case 0:
        enemy = new BallshipSprite(
          xPosition,
          yPosition,
          canvas.enemyProjectile,
          120,
          120,
          2.5,
          8,
          30
        );
        break;
      case 1:
        enemy = new SpinnerSprite(
          xPosition,
          yPosition,
          canvas.enemyProjectile,
          80,
          50,
          3.5,
          1,
          80
        );
        break;
      case 2:
        enemy = new CruiserSprite(
          xPosition,
          yPosition,
          canvas.enemyProjectile,
          150,
          100,
          4.2,
          2,
          30
        );
        break;
      default:
        console.log("Unknown enemy type");
        break;
    }

    if (enemy) {
      enemyArray.push(enemy);
    }
  }

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

  enemyArray.forEach((enemy, index) => {
    if (collision(player, enemy) && !playerCollided) {
      console.log("Collision!!!", index);
      playerCollided = true;

      let explosionX = enemy.x + enemy.width / 2 - EXPLOSION_FRAME_WIDTH / 2;
      let explosionY = enemy.y + enemy.height / 2 - EXPLOSION_FRAME_HEIGHT / 2;

      explosions.push(
        new Explosion(
          explosionX,
          explosionY,
          EXPLOSION_FRAME_WIDTH,
          EXPLOSION_FRAME_HEIGHT,
          16,
          "images/exp2_0.png"
        )
      );

      playExplode();

      enemyArray.splice(index, 1);

      setTimeout(() => {
        gameScreen.style.display = "none";
        gameEndScreen.style.display = "block";
      }, 2000);

      // endScreen();
    }
  });

  explosions.forEach((explosion) => {
    explosion.update();
  });

  explosions.forEach((explosion) => {
    explosion.draw(ctx);
  });

  enemyArray.forEach((enemy) => {
    projectileScheme.projectileRemove(enemy);
  });

  enemyArray.forEach((enemy) => {
    if (enemy.health <= 0) {
      const index = enemyArray.indexOf(enemy);

      let explosionX = enemy.x + enemy.width / 2 - EXPLOSION_FRAME_WIDTH / 2;
      let explosionY = enemy.y + enemy.height / 2 - EXPLOSION_FRAME_HEIGHT / 2;

      explosions.push(
        new Explosion(
          explosionX,
          explosionY,
          EXPLOSION_FRAME_WIDTH,
          EXPLOSION_FRAME_HEIGHT,
          16,
          "images/exp2_0.png"
        )
      );
      playExplode();
      enemyArray.splice(index, 1);

      enemy.delete(ctx);
    }
  });
  enemyArray.forEach((enemy) => {
    enemy.updatePosition(canvas.width);
  });
  enemyArray = enemyArray.filter((enemy) => {
    return enemy.y < canvas.height && enemy.y + enemy.height > 0;
  });

  // if (enemyArray.length === 0) {
  //   gameScreen.style.display = "none";
  //   gameEndScreen.style.display = "block";
  // }

  if (enemyArray.length === 0) {
    setTimeout(() => {
      gameScreen.style.display = "none";
      gameEndScreen.style.display = "block";
    }, 2000);
  }

  requestAnimationFrame(gameLoop);
}

bgImage.onload = function () {
  requestAnimationFrame(gameLoop);
};
