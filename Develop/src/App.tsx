import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import { Candidate } from './interfaces/Candidate.interface';

const App: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Load saved candidates from localStorage when the app starts
  useEffect(() => {
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  // Save to localStorage whenever savedCandidates changes
  useEffect(() => {
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
  }, [savedCandidates]);

  const handleSaveCandidate = (candidate: Candidate) => {
    setSavedCandidates((prev) => {
      const updatedCandidates = [...prev, candidate];
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates)); // Save immediately
      return updatedCandidates;
    });
  };

  // Function to delete a saved candidate
  const handleDeleteCandidate = (candidateLogin: string) => {
    setSavedCandidates((prev) => {
      const updatedCandidates = prev.filter((c) => c.login !== candidateLogin);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates)); // Save immediately
      return updatedCandidates;
    });
  };

  return (
    <div>
      <Nav />
      <h1>GitHub Candidate Search</h1>
      <Outlet context={{ savedCandidates, handleSaveCandidate, handleDeleteCandidate }} />
    </div>
  );
};

export default App;


