// /attacks/Mage.js

export const iceLance = (attacker, defender) => {
    const damage = Math.floor(Math.random() * (attacker.attack * 1.8));
    defender.health -= damage;
    return {
      attackName: 'Ice Lance',
      damage,
      defenderHealth: defender.health
    };
  };
  