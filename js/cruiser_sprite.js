import Enemy from "./enemy.js";
export default class CruiserSprite extends Enemy {
  constructor(x, y, enemyProjectile, width, height, speed, health, frameRate) {
    const randomY = Math.random() * 700;
    super(x, randomY, enemyProjectile, width, height, speed, health);
    (this.framePaths = [
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
    ]),
      (this.frames = this.framePaths.map((path) => {
        let img = new Image();
        img.src = path;
        return img;
      }));
    this.currentFrame = 0;
    this.frameRate = frameRate;
    this.lastFrameUpdate = Date.now();
    this.amplitude = 50;
    this.angle = 0;
    this.angleVelocity = 0.04;
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

  draw(ctx) {
    ctx.drawImage(
      this.frames[this.currentFrame],
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
