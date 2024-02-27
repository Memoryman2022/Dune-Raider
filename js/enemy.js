export default class Enemy {
  constructor(x, y, enemyProjectile, width, height, speed, health) {
    this.x = x;
    this.y = y;
    this.enemyProjectile = enemyProjectile;
    this.width = 50;
    this.height = 50;
    this.speed = speed;
    this.health = health;
  }

  draw(ctx) {
    ctx.drawImage(this.enemyImage, this.x, this.y, this.width, this.height);
  }

  inflictDamage(damage) {
    this.health -= damage;
  }
  enemyShoot() {}

  move() {}
}
