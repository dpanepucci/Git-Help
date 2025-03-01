import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { useOutletContext } from 'react-router-dom';

import '../../stylePages/SavedCandidates.css';

const SavedCandidates: React.FC = () => {
  const { savedCandidates, handleDeleteCandidate } = useOutletContext<{
    savedCandidates: Candidate[];
    handleDeleteCandidate: (login: string) => void;
  }>();
// Saved Candidates
  return (
    <div>
      <h2>Saved Candidates</h2>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate) => (
          <div className='savedCandidates' key={candidate.login} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '13px' }}>
            <img src={candidate.avatar_url} alt={candidate.login} width={100} />
            <br />
            <h3>{candidate.login}</h3>
            <div className='savedCandidatesInfo'>
              <p>Location: {candidate.location || 'N/A'}</p>
              <p>Email: {candidate.email || 'N/A'}</p>
              <p>Company: {candidate.company || 'N/A'}</p>
              <p>Bio: {candidate.bio || 'N/A'}</p>
            </div>
            <br />
            <button id='delete' onClick={() => handleDeleteCandidate(candidate.login)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No saved candidates yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;


