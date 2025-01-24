import React from "react";

const EnemyCard = ({ enemy, onAttack }) => {
  return (
    <div>
      <h3>{enemy.name}</h3>
      <p>Health: {enemy.health}</p>
      <button onClick={onAttack}>Attack</button>
    </div>
  );
};

export default EnemyCard;
