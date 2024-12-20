import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MyTickets from './components/MyTickets';
import SolutionCenter from './components/SolutionCenter';

function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/my-tickets" element={<MyTickets />} />

      <Route path="/solution-center" element={<SolutionCenter />} />
      
    </Routes>
  );
}

export default App;
