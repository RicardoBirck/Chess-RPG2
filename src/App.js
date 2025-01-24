// /App.js or routes file

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterSelection from './components/CharacterSelection';
import AdventurePage from './components/AdventurePage';
import MapPage from './components/MapPage';
import BattlePage from './components/BattlePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* First page is the CharacterSelection */}
        <Route path="/" element={<CharacterSelection />} />

        {/* After character selection, go to Adventure */}
        <Route path="/adventure" element={<AdventurePage />} />

        {/* MapPage should be based on the adventure selected */}
        <Route path="/map/:adventure" element={<MapPage />} />

        {/* BattlePage depends on the selected adventure and path */}
        <Route path="/battle/:adventure/:path" element={<BattlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
