let spinSound = new Audio("sounds/spinner.wav");
spinSound.volume = 0.3;

import Enemy from "./enemy.js";
export default class SpinnerSprite extends Enemy {
  constructor(x, y, enemyProjectile, width, height, speed, health, frameRate) {
    const randomY = Math.random() * 700;
    super(x, randomY, enemyProjectile, width, height, speed, health);
    (this.framePaths = [
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
    ]),
      (this.frames = this.framePaths.map((path) => {
        let img = new Image();
        img.src = path;
        return img;
      }));
    this.currentFrame = 0;
    this.frameRate = frameRate;
    this.lastFrameUpdate = Date.now();
    this.amplitude = 60;
    this.angle = 0;
    this.angleVelocity = 0.08;
    this.initialY = randomY;
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
    // this.y += this.ySpeed;
    this.angle += this.angleVelocity;
    this.y = this.initialY + Math.sin(this.angle) * this.amplitude;
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
    ctx.drawImage(this.frames[this.currentFrame], x, y, width, height);
  }
  playSound() {
    if (this.playSoundOnce) {
      spinSound.play();
      this.playSoundOnce = false;
    }
  }
  stopSound() {
    if (!this.spinSound.paused) {
      this.spinSound.pause();
      this.spinSound.currentTime = 0;
    }
  }
}
