import React, { useState, useEffect } from "react";

const LiveMatch = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Dummy Live Match Data (Replace with API later)
    setMatches([
      {
        id: 1,
        teams: "India vs Australia",
        score: "India 245/3 (40.2 ov)",
        status: "India needs 56 runs in 58 balls",
      },
      {
        id: 2,
        teams: "Pakistan vs England",
        score: "Pakistan 198/5 (35.0 ov)",
        status: "Rain delay",
      },
    ]);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">🏏 Live Cricket Matches</h1>
      <div className="w-full max-w-lg space-y-4">
        {matches.map((match) => (
          <div key={match.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{match.teams}</h2>
            <p className="text-sm">{match.score}</p>
            <p className="text-sm text-yellow-400 font-semibold">{match.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMatch;