// /components/MapPage.js
import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { randomizeEnemies } from '../data/randomizeEnemies';

const MapPage = () => {
  const { adventure } = useParams();
  const { playerName, selectedClass } = useLocation().state || {}; // Get character data from location.state
  const navigate = useNavigate();

  if (!playerName || !selectedClass) {
    return (
      <div>
        <h1>Error: Character data not found.</h1>
        <p>Please return to the Character Selection page and create your character.</p>
        <button onClick={() => navigate('/')}>Go to Character Selection</button>
      </div>
    );
  }

  const paths = [
    { name: 'Path 1', label: 'Forest' },
    { name: 'Path 2', label: 'Cave' },
    { name: 'Path 3', label: 'Mountain' },
  ];

  const handlePathSelection = (path) => {
    const randomEnemy = randomizeEnemies(path.name);

    if (!randomEnemy) {
      console.error('No enemy found for this path');
      return;
    }

  
    navigate(`/battle/${adventure}/${path.name}`, {
      state: { playerName, selectedClass, enemy: randomEnemy },
    });
  };

  return (
    <div>
      {/* Player Info Section */}
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

      {/* Adventure Map Section */}
      <h1>{adventure} - Map</h1>
      <div className="map-paths">
        {paths.map((path) => (
          <div key={path.name} className="path">
            <button onClick={() => handlePathSelection(path)}>{path.label}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapPage;
