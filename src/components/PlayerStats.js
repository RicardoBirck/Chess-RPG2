import React from "react";

const PlayerStats = ({ playerData }) => {
  return (
    <div>
      <h3>Player Stats:</h3>
      <ul>
        <li>Health: {playerData.health}</li>
        <li>Energy: {playerData.energy}</li>
        <li>Attack Power: {playerData.attackPower}</li>
        <li>Defense: {playerData.defense}</li>
        <li>Abilities: {playerData.abilities.join(", ")}</li>
        <li>Unique Attacks: {playerData.uniqueAttacks.join(", ")}</li>
      </ul>
    </div>
  );
};

export default PlayerStats;
