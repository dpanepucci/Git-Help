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
            <p>Name: {candidate.name}</p>
            <p>Location: {candidate.location || 'N/A'}</p>
            <p>Email: {candidate.email || 'N/A'}</p>
            <p>Company: {candidate.company || 'N/A'}</p>
            <p>Bio: {candidate.bio || 'N/A'}</p>
          </div>
        ))
      ) : (
        <p>No saved candidates yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;

