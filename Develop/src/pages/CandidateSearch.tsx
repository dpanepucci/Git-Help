import React, { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import { useOutletContext } from 'react-router-dom';

// Styling
import '../../stylePages/CandidateSearch.css';

const CandidateSearch: React.FC = () => {
  const { handleSaveCandidate } = useOutletContext<{ handleSaveCandidate: (candidate: Candidate) => void }>();
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  const fetchRandomCandidate = async () => {
    const data = await searchGithub();
    if (data.length > 0) {
      setCandidate(data[0]);
    }
  };
// Fetch Random Candidate
  useEffect(() => {
    fetchRandomCandidate();
  }, []);
// Handle Save
  const handleSave = () => {
    if (candidate) {
      handleSaveCandidate(candidate);
      fetchRandomCandidate();
    }
  };
 // Candidate Card
  return (
  <center>
    <div className='candidateCard'>
      {candidate ? (
        <div>
            <img className='img' src={candidate.avatar_url} alt={candidate.login} width={100} />
            <h2>{candidate.login}</h2>
            <p>Location: {candidate.location || 'N/A'}</p>
            <p>Email: {candidate.email || 'N/A'}</p>
            <p>Company: {candidate.company || 'N/A'}</p>
            <p>Bio: {candidate.bio || 'N/A'}</p>
          <div className='buttons'>
            <button id='buttonSave' onClick={handleSave}>+</button>
            <button id='buttonSkip' onClick={fetchRandomCandidate}>-</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </center>
  );
};

export default CandidateSearch;
