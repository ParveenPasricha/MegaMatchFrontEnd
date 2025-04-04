import React, { useState, useEffect } from "react";
import axios from "axios";

const LiveScore = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get(
          "https://api.cricapi.com/v1/cricScore?apikey=8e424b5e-d681-4e78-8ff8-590fca4b3c74"
        );
        setMatches(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchScores();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <h1 className="text-red-500 text-2xl">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 lg:ml-20 min-h-screen p-6">
      <h1 className="text-center text-3xl text-white font-bold mb-6">
        Live Cricket Scores
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.length > 0 ? (
          matches.map((match) => (
            <div key={match.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 justify-between">
                <div className="flex flex-col items-center">
                  <img
                    src={match.t1img}
                    alt={match.t1}
                    className="w-16 h-16 object-contain rounded-lg border border-gray-500"
                  />
                  <h2 className="text-white text-lg font-semibold text-center">
                    {match.t1}
                  </h2>
                </div>
                <span className="text-white text-xl font-bold">VS</span>
                <div className="flex flex-col items-center">
                  <img
                    src={match.t2img}
                    alt={match.t2}
                    className="w-16 h-16 object-contain rounded-lg border border-gray-500"
                  />
                  <h2 className="text-white text-lg font-semibold text-center">
                    {match.t2}
                  </h2>
                </div>
              </div>
              <p className="text-white mt-2">Status: {match.status}</p>
              <p className="text-white">Match Type: {match.matchType.toUpperCase()}</p>
              <p className="text-white font-semibold">Series: {match.series}</p>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No live matches right now.</p>
        )}
      </div>
    </div>
  );
};

export default LiveScore;
