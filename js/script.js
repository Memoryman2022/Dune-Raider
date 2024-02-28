// import Player from "./player.js";
// import ProjectilesScheme from "./projectilesScheme.js";
// import BallshipSprite from "./ballship_sprite.js";
// import SpinnerSprite from "./spinner_sprite.js";
// import CruiserSprite from "./cruiser_sprite.js";
// // let canvas = document.getElementById("game-canvas");
// // const ctx = canvas.getContext("2d");
// const gameEndScreen = document.getElementById("end-screen");

// export function gameLoop() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   //screen
//   ctx.drawImage(bgImage, x, 0, canvas.width, canvas.height);
//   ctx.drawImage(bgImage, x + canvas.width, 0, canvas.width, canvas.height);

//   //game elements
//   projectileScheme.draw(ctx);
//   player.draw(ctx);

//   enemyArray.forEach((enemy) => {
//     if (enemy instanceof CruiserSprite) {
//       let cruiserSpriteWidth = 150;
//       let cruiserSpriteHeight = 100;
//       enemy.update();
//       enemy.draw(
//         ctx,
//         enemy.x,
//         enemy.y,
//         cruiserSpriteWidth,
//         cruiserSpriteHeight
//       );
//     }

//     if (enemy instanceof SpinnerSprite) {
//       let spinnerSpriteWidth = 100;
//       let spinnerSpriteHeight = 100;
//       enemy.update();
//       enemy.draw(
//         ctx,
//         enemy.x,
//         enemy.y,
//         spinnerSpriteWidth,
//         spinnerSpriteHeight
//       );
//     }

//     if (enemy instanceof BallshipSprite) {
//       let ballshipSpriteWidth = 150;
//       let ballshipSpriteHeight = 150;
//       enemy.update();
//       enemy.draw(
//         ctx,
//         enemy.x,
//         enemy.y,
//         ballshipSpriteWidth,
//         ballshipSpriteHeight
//       );
//     }
//   });

//   x -= scrollSpeed;
//   if (x <= -canvas.width) x = 0;

//   enemyArray.forEach((enemy) => {
//     projectileScheme.projectileRemove(enemy);
//   });

//   // const enemies = [new Enemy(ballshipSprite)];
//   // enemies.forEach((enemy) => {
//   //   if (projectileScheme.projectileCollision(enemy)) {
//   //     if (enemy.health <= 0) {
//   //       const index = enemies.indexOf(enemy);
//   //       enemies.splice(index, 1);
//   //     }
//   //   } else {
//   //     enemyImage.draw(ctx);
//   //   }
//   // });

//   enemyArray.forEach((enemy) => {
//     if (enemy.health <= 0) {
//       const index = enemyArray.indexOf(enemy);
//       enemyArray.splice(index, 1);

//       enemy.delete(ctx);
//     }
//   });

//   if (enemyArray.length === 0) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     localStorage.setItem("gameEnded", "true");
//   }

//   requestAnimationFrame(gameLoop);
// }
