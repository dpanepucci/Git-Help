import React, { useState } from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import { Candidate } from './interfaces/Candidate.interface';

const App: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  const handleSaveCandidate = (candidate: Candidate) => {
    setSavedCandidates((prev) => [...prev, candidate]);
  };

  return (
    <div>
      <Nav />
      <h1>GitHub Candidate Search</h1>
      <Outlet context={{ savedCandidates, handleSaveCandidate }} />
    </div>
  );
};

export default App;
