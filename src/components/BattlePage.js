// /components/BattlePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const BattlePage = () => {
  const location = useLocation();
  const { playerName, selectedClass, enemy } = location.state || {}; // Access character and enemy data

  if (!playerName || !selectedClass || !enemy) {
    return <div>Error: Missing data. Please make sure all necessary data is passed.</div>;
  }

  return (
    <div>
      <h1>Battle!</h1>
      <h2>{playerName} the {selectedClass.name}</h2>
      <h3>Stats:</h3>
      <ul>
        <li>Health: {selectedClass.health}</li>
        <li>Energy: {selectedClass.energy}</li>
        <li>Attack: {selectedClass.attack}</li>
        <li>Defense: {selectedClass.defense}</li>
      </ul>

      <h3>Enemy: {enemy.name}</h3>
      <ul>
        <li>Health: {enemy.health}</li>
        <li>Attack: {enemy.attack}</li>
        <li>Defense: {enemy.defense}</li>
      </ul>
    </div>
  );
};

export default BattlePage;
