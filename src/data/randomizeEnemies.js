// /data/randomizeEnemies.js

export const randomizeEnemies = (path) => {
  // Enemy data for each path with full objects (including stats)
  const enemies = {
    "Path 1": [
      { name: 'Goblin', health: 50, attack: 10, defense: 3 },
      { name: 'Wolf', health: 70, attack: 12, defense: 4 },
      { name: 'Bandit', health: 60, attack: 14, defense: 6 },
    ],
    "Path 2": [
      { name: 'Orc', health: 100, attack: 15, defense: 5 },
      { name: 'Troll', health: 150, attack: 20, defense: 15 },
      { name: 'Giant', health: 200, attack: 25, defense: 20 },
    ],
    "Path 3": [
      { name: 'Dragon', health: 300, attack: 40, defense: 30 },
      { name: 'Hydra', health: 250, attack: 35, defense: 25 },
      { name: 'Behemoth', health: 350, attack: 50, defense: 40 },
    ],
  };

  // Select enemies based on the path
  const selectedEnemies = enemies[path];
  if (!selectedEnemies || selectedEnemies.length === 0) {
    console.error(`No enemies found for ${path}`);
    return null; // Return null if no enemies are available for the path
  }

  // Return a random enemy object from the path
  const randomIndex = Math.floor(Math.random() * selectedEnemies.length);
  return selectedEnemies[randomIndex];
};
