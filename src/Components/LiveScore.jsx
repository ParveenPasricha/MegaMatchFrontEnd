import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveScore = () => {
    const API_Key = "8e424b5e-d681-4e78-8ff8-590fca4b3c74"
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get('https://api.football-data.org/v4/matches', {
          headers: {
            'X-Auth-Token': API_Key
          }
        });
        setScores(response.data.matches);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchScores();
  }, []);  // Empty array ensures this only runs on component mount

  if (loading) {
    return (
      <div className="bg-black h-screen flex justify-center items-center">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black h-screen flex justify-center items-center">
        <h1 className="text-white text-2xl">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="bg-black h-screen p-4">
      <h1 className="text-center font-bold text-2xl text-white mb-4">Live Score</h1>
      <div className="text-white">
        {scores.length > 0 ? (
          scores.map((match, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-800 rounded">
              <p>{match.homeTeam.name} vs {match.awayTeam.name}</p>
              <p>Score: {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</p>
              <p>Status: {match.status}</p>
            </div>
          ))
        ) : (
          <p>No live matches right now.</p>
        )}
      </div>
    </div>
  );
};

export default LiveScore;
