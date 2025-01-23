import { enemies } from '../data/enemies';

export const getRandomEnemies = (adventureName, pathDifficulty, numberOfEnemies = 3) => {
  // Get the list of enemies for the selected adventure
  const availableEnemies = enemies[adventureName];

  // Filter enemies based on difficulty level (e.g., higher difficulty may include tougher enemies)
  const filteredEnemies = availableEnemies.filter(enemy => enemy.attack >= pathDifficulty * 5); // Adjust this filter based on your difficulty system

  // Shuffle the filtered enemies and pick the specified number
  const shuffledEnemies = filteredEnemies.sort(() => 0.5 - Math.random()).slice(0, numberOfEnemies);

  return shuffledEnemies;
};
