import Projectiles from "./projectiles.js";

export default class ProjectilesScheme {
  projectilesArray = [];
  loadingDelay = 0;

  constructor(canvas) {
    this.canvas = canvas;
  }

  shoot(projectileOriginX, projectileOriginY, speed, delay, damage) {
    if (this.loadingDelay <= 0) {
      this.projectilesArray.push(
        new Projectiles(projectileOriginX, projectileOriginY, speed, damage)
      );
      this.loadingDelay = delay;
    }
    this.loadingDelay--;
  }

  draw(ctx) {
    this.projectilesArray.forEach((projectiles) => {
      if (this.offScreenProjectiles(projectiles)) {
        const index = this.projectiles.indexOf(projectiles);
        this.projectiles.splice(index, 1);
      }
      projectiles.draw(ctx);
    });
  }

  offScreenProjectiles(projectiles) {
    return projectiles.x <= projectiles.length;
  }

  projectileCollision(sprite) {
    return this.projectilesArray.some((projectiles) => {
      if (projectiles.projectileCollision(sprite)) {
        this.projectilesArray.splice(
          this.projectilesArray.indexOf(projectiles),
          1
        );
        return true;
      }
      return false;
    });
  }
}
