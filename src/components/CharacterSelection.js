import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../data/classes'; 

const CharacterSelection = () => {
  const [playerName, setPlayerName] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);
  const navigate = useNavigate();

  const handleClassSelection = (className) => {
    const chosenClass = classes.find((cls) => cls.name === className);
  
    if (!chosenClass) {
      console.error(`Class with name "${className}" not found in classes.js`);
      return;
    }
  
    setSelectedClass(chosenClass);
  };
  
  const handleStartAdventure = () => {
    if (!playerName || !selectedClass) {
      alert('Please enter your name and select a class!');
      return;
    }

    // Pass the player data to the next page (AdventurePage)
    navigate('/adventure', { state: { playerName, selectedClass } });
  };

  return (
    <div className="character-selection">
      <h1>Create Your Character</h1>

      {/* Player Name Input */}
      <div className="name-input">
        <label htmlFor="name">Enter Your Name:</label>
        <input
          type="text"
          id="name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your character's name"
        />
      </div>

      {/* Class Selection Buttons */}
      <div className="class-buttons">
        <h2>Select Your Class:</h2>
        {classes.map((cls) => (
          <button
            key={cls.name}
            onClick={() => handleClassSelection(cls.name)}
            className={selectedClass?.name === cls.name ? 'selected' : ''}
          >
            {cls.name}
          </button>
        ))}
      </div>

      {/* Selected Class Details */}
      {selectedClass && (
        <div className="class-details">
          <h2>{selectedClass.name}</h2>
          <p>{selectedClass.description}</p>
          <ul>
            <li>Health: {selectedClass.stats.health}</li>
            <li>Energy: {selectedClass.stats.energy}</li>
            <li>Attack Power: {selectedClass.stats.attackPower}</li>
            <li>Defense: {selectedClass.stats.defense}</li>
          </ul>

          <h3>Attacks:</h3>
          <ul>
            {selectedClass.attacks.map((attack) => (
              <li key={attack.name}>
                {attack.name}: {attack.description}
              </li>
            ))}
          </ul>

          <h3>Utilities:</h3>
          <ul>
            {selectedClass.utilities.map((utility) => (
              <li key={utility.name}>
                {utility.name}: {utility.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Start Adventure Button */}
      <button
        className="start-adventure"
        onClick={handleStartAdventure}
        disabled={!playerName || !selectedClass}
      >
        Start Adventure
      </button>
    </div>
  );
};

export default CharacterSelection;
