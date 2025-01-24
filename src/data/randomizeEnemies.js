// /data/randomizeEnemies.js

export const randomizeEnemies = (path) => {
  // Enemy data for each path
  const enemies = {
    "Path 1": ['Goblin', 'Wolf', 'Bandit'],
    "Path 2": ['Orc', 'Troll', 'Giant'],
    "Path 3": ['Dragon', 'Hydra', 'Behemoth'],
  };

  // Select enemies based on the path
  const selectedEnemies = enemies[path];
  if (!selectedEnemies || selectedEnemies.length === 0) {
    console.error(`No enemies found for ${path}`);
    return []; // Return an empty array if no enemies are available for the path
  }

  // Return a random enemy from the path
  const randomIndex = Math.floor(Math.random() * selectedEnemies.length);
  return selectedEnemies[randomIndex];
};
