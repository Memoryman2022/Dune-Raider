export default class Hit {
  constructor(x, y, frameWidth, frameHeight, totalFrames, spriteSheet) {
    this.x = x;
    this.y = y;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.totalFrames = totalFrames;
    this.spriteSheet = new Image();
    this.spriteSheet.src = spriteSheet;
    this.currentFrame = 0;
    this.finished = false;
    this.updateCounter = 0;
    this.updateThreshold = 2;
  }

  update() {
    this.updateCounter++;
    if (this.updateCounter >= this.updateThreshold) {
      this.currentFrame++;
      this.updateCounter = 0;
    }
    if (this.currentFrame >= this.totalFrames) {
      this.finished = true;
    }
  }

  draw(ctx) {
    if (!this.finished) {
      let frameX =
        (this.currentFrame * this.frameWidth) % this.spriteSheet.width;
      let frameY =
        Math.floor(
          (this.currentFrame * this.frameWidth) / this.spriteSheet.width
        ) * this.frameHeight;
      let scaleFactor = 2;
      let scaledWidth = this.frameWidth * scaleFactor;
      let scaledHeight = this.frameHeight * scaleFactor;
      let drawX = this.x - (scaledWidth - this.frameWidth) / 2;
      let drawY = this.y - (scaledHeight - this.frameHeight) / 2;

      ctx.drawImage(
        this.spriteSheet,
        frameX,
        frameY,
        this.frameWidth,
        this.frameHeight,
        drawX,
        drawY,
        scaledWidth,
        scaledHeight
      );
    }
  }
}
