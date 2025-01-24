// /classes/Warrior.js

import { basicAttack, enhancedAttack } from '../utils/attackUtils'; // This already includes the calculateDamage function

const warrior = {
  name: 'Warrior',
  level: 1,
  health: 100,
  energy: 50,
  attack: 8,
  defense: 5,
  attacks: [
    { name: 'Basic Attack', action: basicAttack },
    { name: 'Enhanced Attack', action: enhancedAttack },
  ],
  uniqueAttacks: [
    // Example: Shield Slam can be added here
  ],
};

export default warrior;
