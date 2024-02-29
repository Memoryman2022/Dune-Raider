class EnemySpawner {
  constructor(spawnFunction) {
    this.spawnFunction = spawnFunction;
    this.isSpawning = false;
  }

  startSpawning() {
    this.isSpawning = true;
    this.scheduleNextSpawn();
  }

  stopSpawning() {
    this.isSpawning = false;
  }

  scheduleNextSpawn() {
    if (!this.isSpawning) return;

    const nextSpawnDelay = this.getRandomSpawnDelay();

    setTimeout(() => {
      this.spawnFunction();
      this.scheduleNextSpawn();
    }, nextSpawnDelay);
  }

  getRandomSpawnDelay() {
    return Math.random() * 4000 + 1000;
  }
}

function spawnEnemy() {}

const spawner = new EnemySpawner(spawnEnemy);
spawner.startSpawning();
