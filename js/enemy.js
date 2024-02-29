export default class Enemy {
  constructor(x, y, enemyProjectile, width, height, speed, health, direction) {
    this.x = x;
    this.y = y;
    this.enemyProjectile = enemyProjectile;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.health = health;
  }

  draw(ctx) {
    ctx.drawImage(this.enemyImage, this.x, this.y, this.width, this.height);
  }

  inflictDamage(damage) {
    this.health -= damage;
  }

  updatePosition(canvasWidth) {
    this.move(canvasWidth);
  }

  delete(ctx) {
    ctx.clearRect(this.x + 10, this.y + 10, this.width, this.height);
  }
}
