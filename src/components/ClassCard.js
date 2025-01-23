import React from "react";

const ClassCard = ({ playerData }) => {
  return (
    <div>
      <h2>{playerData.name}</h2>
      <p>Level: {playerData.level}</p>
      <p>Health: {playerData.health}</p>
      <p>Energy: {playerData.energy}</p>
      <p>Attack Power: {playerData.attackPower}</p>
      <p>Defense: {playerData.defense}</p>
    </div>
  );
};

export default ClassCard;
