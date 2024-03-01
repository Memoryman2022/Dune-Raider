let ballSound = new Audio("sounds2/ballship.wav");
ballSound.volume = 0.2;

import Enemy from "./enemy.js";
export default class BallshipSprite extends Enemy {
  constructor(x, y, enemyProjectile, width, height, speed, health, frameRate) {
    super(x, y, enemyProjectile, width, height, speed, health);
    (this.framePaths = [
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
    ]),
      (this.frames = this.framePaths.map((path) => {
        let img = new Image();
        img.src = path;
        return img;
      }));
    this.currentFrame = 0;
    this.frameRate = frameRate;
    this.lastFrameUpdate = Date.now();
    this.playSoundOnce = true;
  }

  // overwrighting the move from parent
  move(canvasWidth) {
    // if (this.x > canvasWidth - 400) {
    //   this.x -= this.speed;
    // }
    // this.x += this.direction * (Math.random() * 2);
    // if (this.y <= 0 || this.y + this.height >= 700) {
    //   this.direction *= -1;
    // }

    this.x -= this.speed;
  }

  update(canvasWidth) {
    super.updatePosition(canvasWidth);
    let now = Date.now();
    let elapsed = now - this.lastFrameUpdate;

    if (elapsed >= 1000 / this.frameRate) {
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
      this.lastFrameUpdate = now;
    }
  }

  draw(ctx, x, y, width, height) {
    this.playSound();
    ctx.drawImage(
      this.frames[this.currentFrame],
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  playSound() {
    if (this.playSoundOnce) {
      ballSound.play();
      this.playSoundOnce = false;
    }
  }
  stopSound() {
    if (!this.ballSound.paused) {
      this.ballSound.pause();
      this.ballSound.currentTime = 0;
    }
  }
}
