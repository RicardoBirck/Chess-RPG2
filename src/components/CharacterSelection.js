import React, { useState } from "react";
import { createClass } from "../utils/classFactory"; // Utility to calculate stats
import { classes } from "../data/classes"; // Base class data
import ClassCard from "../ClassCard";
import LevelControls from "./LevelControls";
import PlayerStats from "./PlayerStats";

const CharacterSelection = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [level, setLevel] = useState(1); // Player's current level
  const [playerData, setPlayerData] = useState(null); // Store player's class and stats

  // Handle class selection
  const handleClassSelection = (className) => {
    const selected = createClass(className, level);
    setSelectedClass(selected.name);
    setPlayerData(selected);
  };

  // Handle level up (increasing level)
  const handleLevelUp = () => {
    const newLevel = level + 1;
    setLevel(newLevel);

    // Recalculate the stats based on the new level
    if (selectedClass) {
      const updatedClass = createClass(selectedClass, newLevel);
      setPlayerData(updatedClass); // Update player data with new stats
    }
  };

  return (
    <div>
      <h1>Select Your Class</h1>
      <div>
        {Object.keys(classes).map((className) => (
          <button key={className} onClick={() => handleClassSelection(className)}>
            {className}
          </button>
        ))}
      </div>

      {/* ClassCard displays selected class details */}
      {playerData && <ClassCard playerData={playerData} />}

      {/* LevelControls lets the player level up */}
      <LevelControls handleLevelUp={handleLevelUp} currentLevel={level} />

      {/* PlayerStats dynamically displays player's stats */}
      {playerData && <PlayerStats playerData={playerData} />}
    </div>
  );
};

export default CharacterSelection;
