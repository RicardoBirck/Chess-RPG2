// /components/AdventurePage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { adventures } from '../data/adventures';

const AdventurePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { playerName, selectedClass } = location.state || {}; // Access character data

  if (!playerName || !selectedClass) {
    return <div>Error: Character data not found. Please make sure you selected a character first.</div>;
  }

  const handleAdventureSelection = (adventure) => {
    navigate(`/map/${adventure}`, { state: { playerName, selectedClass } }); // Pass character data to MapPage
  };

  return (
    <div>
      <h1>Select Your Adventure</h1>
      {adventures.map((adventure) => (
        <div key={adventure.name} onClick={() => handleAdventureSelection(adventure.name)}>
          <h3>{adventure.name}</h3>
          <p>{adventure.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AdventurePage;
