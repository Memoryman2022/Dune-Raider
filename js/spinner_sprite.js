import Enemy from "./enemy.js";
export default class SpinnerSprite extends Enemy {
  constructor(
    x,
    y,
    enemyProjectile,
    width,
    height,
    speed,
    health,
    framePaths,
    frameRate
  ) {
    const randomY = Math.random() * 700;
    super(x, randomY, enemyProjectile, width, height, speed, health);
    this.frames = framePaths.map((path) => {
      let img = new Image();
      img.src = path;
      return img;
    });
    this.currentFrame = 0;
    this.frameRate = frameRate;
    this.lastFrameUpdate = Date.now();
    this.amplitude = 50; // Height of the wave
    this.angle = 0; // Start angle at 0
    this.angleVelocity = 0.08; // Speed of the wave
    this.initialY = randomY;
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
    ctx.drawImage(this.frames[this.currentFrame], x, y, width, height);
  }
}
