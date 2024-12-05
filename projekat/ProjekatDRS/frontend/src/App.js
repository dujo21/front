import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';  // Ako je Register.js u components folderu


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* Dodaj ostale rute po potrebi */}
      </Routes>
    </Router>
  );
}

export default App;