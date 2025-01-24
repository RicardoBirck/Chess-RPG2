// /components/MapPage.js
import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { randomizeEnemies } from '../data/randomizeEnemies';

const MapPage = () => {
  const { adventure } = useParams();
  const { playerName, selectedClass } = useLocation().state || {}; // Get character data from location.state
  const navigate = useNavigate();

  if (!playerName || !selectedClass) {
    return <div>Error: Character data not found. Please make sure you selected a character first.</div>;
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

    navigate(`/battle/${adventure}/${path.name}`, { state: { playerName, selectedClass, enemy: randomEnemy } });
  };

  return (
    <div>
      <h1>{adventure} - Map</h1>
      <div>
        {paths.map((path) => (
          <div key={path.name}>
            <button onClick={() => handlePathSelection(path)}>{path.label}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapPage;
