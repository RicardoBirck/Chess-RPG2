import React from "react";

const LevelControls = ({ handleLevelUp, currentLevel }) => {
  return (
    <div>
      <h3>Level: {currentLevel}</h3>
      <button onClick={handleLevelUp}>Level Up</button>
    </div>
  );
};

export default LevelControls;
