// /attacks/Warrior.js

export const shieldSlam = (attacker, defender) => {
    const damage = Math.floor(Math.random() * (attacker.attack * 2));
    defender.health -= damage;
    return {
      attackName: 'Shield Slam',
      damage,
      defenderHealth: defender.health
    };
  };
  