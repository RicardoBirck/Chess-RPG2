// /abilities/index.js

// Heal - Shared Ability
export const heal = (character) => {
    const healAmount = Math.floor(Math.random() * 50);
    character.health += healAmount;
    return {
      abilityName: 'Heal',
      healAmount,
      characterHealth: character.health
    };
  };
  
  // Commanding Shout (Warrior Ability)
  export const commandingShout = (character) => {
    const buffAmount = Math.floor(Math.random() * 20);
    character.attack += buffAmount;
    return {
      abilityName: 'Commanding Shout',
      buffAmount,
      newAttack: character.attack
    };
  };
  
  // Ice Barrier (Mage Ability)
  export const iceBarrier = (character) => {
    const shieldAmount = Math.floor(Math.random() * 30);
    character.defense += shieldAmount;
    return {
      abilityName: 'Ice Barrier',
      shieldAmount,
      newDefense: character.defense
    };
  };
  