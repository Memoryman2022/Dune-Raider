export default class Projectiles {
  constructor(x, y, speed, damage) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.damage = damage;

    this.width = 50;
    this.height = 40;
    this.projectileImage = new Image();
    this.projectileImage.src = "images/red_projectile.png";
  }

  draw(ctx) {
    ctx.drawImage(
      this.projectileImage,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.x += this.speed;
  }
  projectileCollision(sprite) {
    if (
      this.x <= sprite.x + sprite.width &&
      this.x + this.width >= sprite.x &&
      this.y <= sprite.y + sprite.height &&
      this.y + this.height >= sprite.y
    ) {
      this.hit = true;
      sprite.inflictDamage(this.damage);
      return true;
    }
    return false;
  }
}
