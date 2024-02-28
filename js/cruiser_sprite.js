import Enemy from "./enemy.js";
export default class CruiserSprite extends Enemy {
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
    super(x, y, enemyProjectile, width, height, speed, health);
    this.frames = framePaths.map((path) => {
      let img = new Image();
      img.src = path;
      return img;
    });
    this.currentFrame = 0;
    this.frameRate = frameRate;
    this.lastFrameUpdate = Date.now();
  }

  update() {
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
