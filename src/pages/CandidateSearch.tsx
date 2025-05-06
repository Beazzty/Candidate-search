import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API.tsx';
import { Candidate } from '../interfaces/Candidate.interface';

import '../index.css';

const CandidateSearch = () => {

  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);

  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);

  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {

    const storedCandidates = localStorage.getItem("savedCandidates");
    return storedCandidates ? JSON.parse(storedCandidates) : [];
  });

  useEffect(() => {

    const fetchCandidates = async () => {

      try {

        const data: Candidate[] = await searchGithub();

        setCandidates(data);

        if (data.length > 0) {
          const user = await searchGithubUser(data[0].login);
          setCurrentCandidate(user);
        }
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    fetchCandidates();
  }, []);


  useEffect(() => {
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
  }, [savedCandidates]);


  useEffect(() => {
    const fetchNewCandidate = async () => {
      if (candidates[currentCandidateIndex]) {
        const user = await searchGithubUser(candidates[currentCandidateIndex].login);
        setCurrentCandidate(user);
      } else {
        setCurrentCandidate(null);
      }
    };
    fetchNewCandidate();
  }, [currentCandidateIndex, candidates]);




  const handleSaveCandidate = () => {

    if (currentCandidate) {

      setSavedCandidates((prev) => [...prev, currentCandidate]);

      setCurrentCandidateIndex((prevIndex) => prevIndex + 1);

    }
  };

  const handleNextCandidate = () => {
    setCurrentCandidateIndex((prevIndex) => prevIndex + 1);
  }


  if (!candidates.length) {
    return <p>No candidates available to review.</p>;
  }

  return (
    <div>

      <h1>Candidate Search</h1>

      {currentCandidate ? (
        <div>
          <div className="candidate-card">

            <img src={currentCandidate.avatar_url} alt="avatar" width="300" />

            <h2>{currentCandidate.name}</h2>

            <p><strong>Username:</strong> {currentCandidate.login}</p>

            <p><strong>Location:</strong> {currentCandidate.location || "N/A"}</p>

            <p><strong>Email:</strong> {currentCandidate.email || "N/A"}</p>

            <p><strong>Company:</strong> {currentCandidate.company || "N/A"}</p>

            <p><a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
          </div>

          <div className="button-container">
            <button className="minus-button" onClick={handleNextCandidate}>-</button>
            <button className="plus-button" onClick={handleSaveCandidate}>+</button>
          </div>
        </div>
      ) : (

        <p>No more candidates available</p>
      )}

    </div>
  );
};

export default CandidateSearch;
