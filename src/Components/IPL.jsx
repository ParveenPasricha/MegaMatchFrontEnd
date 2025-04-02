import React, { useState, useEffect } from "react";

const IPL = () => {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Dummy IPL Data (Replace with API later)
    setMatches([
      { id: 1, teams: "CSK vs MI", date: "April 10, 2025", venue: "Wankhede Stadium" },
      { id: 2, teams: "RCB vs KKR", date: "April 12, 2025", venue: "Chinnaswamy Stadium" },
      { id: 3, teams: "SRH vs DC", date: "April 15, 2025", venue: "Rajiv Gandhi Intl. Stadium" },
    ]);

    setTeams([
      { id: 1, name: "Chennai Super Kings" },
      { id: 2, name: "Mumbai Indians" },
      { id: 3, name: "Royal Challengers Bangalore" },
      { id: 4, name: "Kolkata Knight Riders" },
      { id: 5, name: "Sunrisers Hyderabad" },
      { id: 6, name: "Delhi Capitals" },
    ]);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">🏏 IPL 2025 Updates</h1>

      {/* Upcoming Matches */}
      <div className="w-full max-w-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">📅 Upcoming Matches</h2>
        <ul className="space-y-3">
          {matches.map((match) => (
            <li key={match.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <p className="text-lg font-bold">{match.teams}</p>
              <p className="text-sm">📍 {match.venue} | 📆 {match.date}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* IPL Teams */}
      <div className="w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">🏆 IPL Teams</h2>
        <div className="grid grid-cols-2 gap-4">
          {teams.map((team) => (
            <div key={team.id} className="bg-gray-700 p-3 rounded-lg shadow-md text-center">
              {team.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IPL;