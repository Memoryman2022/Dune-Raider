export default class Player {
  constructor(x, y, projectileScheme) {
    this.x = x;
    this.y = y;
    this.projectileScheme = projectileScheme;
    this.width = 100;
    this.height = 50;
    this.speed = 10;
    this.playerImage = new Image();
    this.playerImage.src = "images/Atriedes.png";

    document.addEventListener("keydown", this.keydown);

    document.addEventListener("keyup", this.keyup);
  }

  draw(ctx) {
    ctx.drawImage(this.playerImage, this.x, this.y, this.width, this.height);

    this.move();

    this.shoot();
  }

  shoot() {
    if (this.fire) {
      const projectileOriginX = this.x + this.width;
      const projectileOriginY = this.y + this.height / 5;
      const speed = 20;
      const delay = 10;
      let damage = 1;
      this.projectileScheme.shoot(
        projectileOriginX,
        projectileOriginY,
        speed,
        delay,
        damage
      );
    }
  }

  move() {
    if (this.up) {
      if (this.y - this.speed > 0) {
        this.y -= this.speed;
      }
    }
    if (this.down) {
      if (this.y + this.speed < 750) {
        this.y += this.speed;
      }
    }
    if (this.left) {
      if (this.x - this.speed > 0) {
        this.x -= this.speed;
      }
    }
    if (this.right) {
      if (this.x + this.speed < 1100) {
        this.x += this.speed;
      }
    }
  }

  keydown = (event) => {
    if (event.code === "ArrowUp") {
      this.up = true;
    }

    if (event.code === "ArrowDown") {
      this.down = true;
    }

    if (event.code === "ArrowLeft") {
      this.left = true;
    }

    if (event.code === "ArrowRight") {
      this.right = true;
    }

    //fire start
    if (event.code === "Space") {
      this.fire = true;
    }
  };
  keyup = (event) => {
    if (event.code === "ArrowUp") {
      this.up = false;
    }

    if (event.code === "ArrowDown") {
      this.down = false;
    }

    if (event.code === "ArrowLeft") {
      this.left = false;
    }

    if (event.code === "ArrowRight") {
      this.right = false;
    }

    //fire stop
    if (event.code === "Space") {
      this.fire = false;
    }
  };
}
