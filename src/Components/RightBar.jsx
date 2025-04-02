import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import APIRoni from "./APIRoni";

const RightBar = () => {
  const [liveScore, setLiveScore] = useState(null);
  const [matches, setMatches] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch Live Cricket Score (Dummy Data for Now)
    setLiveScore({
      teams: "India vs Australia",
      score: "250/3 (40 Overs)",
      status: "India needs 50 runs in 10 overs",
    });

    // Fetch Upcoming Matches (Dummy Data)
    setMatches([
      { match: "Pakistan vs England", date: "March 25, 2025" },
      { match: "South Africa vs New Zealand", date: "March 27, 2025" },
    ]);

    // Fetch Latest Cricket News (Dummy Data)
    setNews([
      "Virat Kohli hits another century in World Cup!",
      "Babar Azam becomes No.1 batsman in ICC rankings.",
    ]);
  }, []);

  return (
    <div className="hidden md:flex bg-black h-screen w-72 overflow-auto flex-col p-4 text-white border-l border-gray-700 fixed md:static bottom-0 right-0 z-50">
      {/* Responsive Video */}
      <div className="mb-5 mt-2 w-full flex justify-center">
    <APIRoni/>


        {/* <iframe
          className="w-full sm:w-64 h-40 rounded-lg"
          src="https://www.youtube.com/embed/n5IhhPbnzSQ?autoplay=1&mute=1"
          allow="autoplay"
          allowFullScreen
        /> */}
      </div>

      {/* Live Score */}
      <motion.div
        className="mb-4 p-4 bg-gray-800 rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-lg font-bold text-yellow-400">Live Match</h2>
        {liveScore ? (
          <div>
            <p className="text-md font-semibold">{liveScore.teams}</p>
            <p className="text-xl font-bold">{liveScore.score}</p>
            <p className="text-sm text-gray-300">{liveScore.status}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </motion.div>

      {/* Upcoming Matches */}
      <div className="mb-4 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-lg font-bold text-blue-400">Upcoming Matches</h2>
        <ul>
          {matches.map((match, index) => (
            <li key={index} className="text-sm text-gray-300 mt-1">
              {match.match} - {match.date}
            </li>
          ))}
        </ul>
      </div>

      {/* Cricket News */}
      <div className="p-4 bg-gray-800 rounded-lg mb-4">
        <h2 className="text-lg font-bold text-green-400">Cricket News</h2>
        <ul>
          {news.map((headline, index) => (
            <li key={index} className="text-sm text-gray-300 mt-1">
              • {headline}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
