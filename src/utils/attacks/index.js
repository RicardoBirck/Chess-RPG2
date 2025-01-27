// /attacks/index.js

// Basic Attack - Shared
export const basicAttack = (attacker, defender) => {
    const damage = Math.floor(Math.random() * attacker.attack);
    defender.health -= damage;
    return {
      attackName: 'Basic Attack',
      damage,
      defenderHealth: defender.health
    };
  };
  
  // Enhanced Attack - Shared
  export const enhancedAttack = (attacker, defender) => {
    const damage = Math.floor(Math.random() * (attacker.attack * 1.5));
    defender.health -= damage;
    return {
      attackName: 'Enhanced Attack',
      damage,
      defenderHealth: defender.health
    };
  };
  