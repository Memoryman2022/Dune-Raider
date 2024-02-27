export default class Enemy {
  constructor(x, y, enemyProjectile, width, height, speed, health, direction) {
    this.x = x;
    this.y = y;
    this.enemyProjectile = enemyProjectile;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.health = health;
    this.direction = Math.random() > 0.5 ? 1 : -1;
  }

  draw(ctx) {
    ctx.drawImage(this.enemyImage, this.x, this.y, this.width, this.height);
  }

  inflictDamage(damage) {
    this.health -= damage;
  }
  enemyShoot() {}

  move(canvasWidth) {
    if (this.x > canvasWidth - 400) {
      this.x -= this.speed;
    }
    this.y += this.direction * (Math.random() * 2);
    if (this.y <= 0 || this.y + this.height >= 700) {
      this.direction *= -1;
    }
  }

  updatePosition(canvasWidth) {
    this.move(canvasWidth);
  }

  delete(ctx) {
    ctx.clearRect(this.x + 10, this.y + 10, this.width, this.height);
  }
}
