import React from "react";
import { useHistory } from "react-router-dom";

const VictoryPage = () => {
  const history = useHistory();

  const handleContinue = () => {
    history.push("/map"); // Go back to the MapPage or to next adventure
  };

  return (
    <div>
      <h1>You Win!</h1>
      <p>You earned experience points!</p>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default VictoryPage;
