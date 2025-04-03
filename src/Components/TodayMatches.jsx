import React, { useEffect, useState } from "react";
import CircularLoader from "../notUsed/CircularLoader";

const TodayMatches = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://api.the-odds-api.com/v4/sports/cricket_ipl/participants?apiKey=b56bc5ecbededdebe803fda81142b666")       .then((response) => response.json())
        .then((data) => {
          setMatches(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching matches:", error);
          setLoading(false);
        });
    }, []);
  
    return (
      <div className="min-h-screen sm:ml-0 lg:ml-20 bg-gradient-to-br from-gray-900 to-black text-white p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          🔥 TODAY TEAMS PARTICIPATING
          </h1>
  
        {loading ? (
          <p className="text-center text-lg animate-pulse"><CircularLoader/></p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match) => (
              <div
                key={match.id}
                className="p-6 bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-700 transition-transform transform hover:scale-105"
              >
                <h2 className="text-xl font-semibold text-center mb-2">
                  {match.full_name}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

export default TodayMatches
