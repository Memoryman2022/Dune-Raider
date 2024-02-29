class EnemySpawner {
  constructor(spawnFunction) {
    this.spawnFunction = spawnFunction; // The function that adds an enemy to the game
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
      this.spawnFunction(); // Call the function to spawn an enemy
      this.scheduleNextSpawn(); // Schedule the next spawn
    }, nextSpawnDelay);
  }

  getRandomSpawnDelay() {
    // Return a random delay in milliseconds
    // For example, between 1 and 5 seconds
    return Math.random() * 4000 + 1000;
  }
}

function spawnEnemy() {
  // Logic to instantiate and add an enemy to the game
}

const spawner = new EnemySpawner(spawnEnemy);
spawner.startSpawning();
