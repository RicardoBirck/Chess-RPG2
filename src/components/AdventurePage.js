// /components/AdventurePage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { adventures } from '../data/adventures';

const AdventurePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { playerName, selectedClass } = location.state || {}; // Access character data

  // Handle missing character data
  if (!playerName || !selectedClass) {
    return (
      <div>
        <h1>Error: Character data not found.</h1>
        <p>Please return to the Character Selection page and create your character.</p>
        <button onClick={() => navigate('/')}>Go to Character Selection</button>
      </div>
    );
  }

  // Handle adventure selection
  const handleAdventureSelection = (adventure) => {
    navigate(`/map/${adventure}`, { state: { playerName, selectedClass } }); // Pass character data to MapPage
  };

  return (
    <div>
      {/* Player Info */}
      <div className="player-info">
        <h2>Welcome, {playerName} the {selectedClass.name}!</h2>
        <h3>Your Stats:</h3>
        <ul>
          <li>Health: {selectedClass.stats.health}</li>
          <li>Energy: {selectedClass.stats.energy}</li>
          <li>Attack Power: {selectedClass.stats.attackPower}</li>
          <li>Defense: {selectedClass.stats.defense}</li>
        </ul>
      </div>

      {/* Adventure Selection */}
      <h1>Select Your Adventure</h1>
      <div className="adventures">
        {adventures.map((adventure) => (
          <div
            key={adventure.name}
            className="adventure-card"
            onClick={() => handleAdventureSelection(adventure.name)}
          >
            <h3>{adventure.name}</h3>
            <p>{adventure.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventurePage;
