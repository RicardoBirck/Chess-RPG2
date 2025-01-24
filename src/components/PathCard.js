import React from "react";

const PathCard = ({ path, onClick }) => {
  return (
    <div onClick={() => onClick(path.id)} style={{ cursor: path.unlocked ? "pointer" : "not-allowed", opacity: path.unlocked ? 1 : 0.5 }}>
      <h3>{path.name}</h3>
      <p>{path.description}</p>
    </div>
  );
};

export default PathCard;
