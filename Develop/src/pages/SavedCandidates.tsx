import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { useOutletContext } from 'react-router-dom';

const SavedCandidates: React.FC = () => {
  const { savedCandidates } = useOutletContext<{ savedCandidates: Candidate[] }>();

  return (
    <div>
      <h2>Saved Candidates</h2>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate) => (
          <div key={candidate.login}>
            <h3>{candidate.login}</h3>
            <img src={candidate.avatar_url} alt={candidate.login} width={100} />
          </div>
        ))
      ) : (
        <p>No saved candidates yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;

