// /classes/Mage.js

import { basicAttack, enhancedAttack } from '../attacks/index';
import { iceLance } from '../attacks/Mage';
import { iceBarrier } from '../abilities/Mage';

const mage = {
  name: "Mage",
  health: 80,
  energy: 60,
  attack: 15,
  defense: 8,
  attacks: [basicAttack, enhancedAttack, iceLance],
  abilities: [iceBarrier]
};

export default mage;
