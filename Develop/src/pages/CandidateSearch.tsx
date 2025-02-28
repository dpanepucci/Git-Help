import React, { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import { useOutletContext } from 'react-router-dom';

const CandidateSearch: React.FC = () => {
  const { handleSaveCandidate } = useOutletContext<{ handleSaveCandidate: (candidate: Candidate) => void }>();
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  const fetchRandomCandidate = async () => {
    const data = await searchGithub();
    if (data.length > 0) {
      setCandidate(data[0]);
    }
  };

  useEffect(() => {
    fetchRandomCandidate();
  }, []);

  const handleSave = () => {
    if (candidate) {
      handleSaveCandidate(candidate);
      fetchRandomCandidate();
    }
  };

  return (
    <div>
      {candidate ? (
        <div>
          <h2>{candidate.login}</h2>
          <img src={candidate.avatar_url} alt={candidate.login} width={100} />
          <button onClick={handleSave}>Save</button>
          <button onClick={fetchRandomCandidate}>Skip</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CandidateSearch;
