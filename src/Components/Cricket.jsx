// import React, { useState, useEffect } from "react";

// const Cricket = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCricketData = async () => {
//       try {
//         const response = await fetch(
//           // "https://api.cricapi.com/v1/matches?apikey=8e424b5e-d681-4e78-8ff8-590fca4b3c74&offset=0"
//           "https://api.the-odds-api.com/v4/sports/cricket_ipl/events?apiKey=b56bc5ecbededdebe803fda81142b666"
//         );
//         if (!response.ok) {
//           throw new Error("API call failed");
//         }
//         const result = await response.json();

//         if (result.status !== "success") {
//           throw new Error("Invalid API response");
//         }

//         setData(result.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchCricketData();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen">
//       {/* Header Section */}
//       <h1 className="bg-gradient-to-r from-blue-600 to-grey-200 p-3 ml-10 rounded-md text-center text-3xl font-bold text-white shadow-md">
//         🏏 Live Cricket Matches
//       </h1>

//       {/* Loader & Error Handling */}
//       {loading && (
//         <p className="text-center text-white mt-4">Loading data...</p>
//       )}
//       {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}

//       {/* Live Matches Section */}
//       {data && (
//         <div className="mt-6 mx-auto w-full max-w-5xl">
//           {data.length > 0 ? (
//             <div className="grid grid-cols-1 ml-20 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {data.map((match, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-800 text-white p-5 rounded-lg shadow-lg border border-gray-700 transition transform hover:scale-105"
//                 >
//                   <h2 className="text-xl font-bold text-yellow-400">
//                     {match.teams ? match.teams[0] : "Team 1"} 🆚{" "}
//                     {match.teams ? match.teams[1] : "Team 2"}
//                   </h2>
//                   <p className="text-gray-300 mt-2">🏟 Venue: {match.venue}</p>
//                   <p className="text-gray-300">📅 Date: {match.date}</p>
//                   <p className="text-gray-300">
//                     🔥 Status:{" "}
//                     <span className="text-green-400">
//                       {match.status || "Upcoming"}
//                     </span>
//                   </p>
//                   <p className="text-gray-300">
//                     🏆 Match Type: {match.matchType}
//                   </p>

//                   {/* Place a Bet Button */}
//                   <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition w-full">
//   💰 Place a Bet
// </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-300">
//               No live matches available
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cricket;

// import React, { useState, useEffect } from "react";
// const dummyData = [
//   {
//     teams: ["India", "Australia"],
//     name: "India vs Australia",
//     status: "Live",
//     venue: "Wankhede Stadium",
//     date: "2025-03-30",
//     matchType: "T20",
//   },
//   {
//     teams: ["England", "South Africa"],
//     name: "England vs South Africa",
//     status: "Upcoming",
//     venue: "Lord's",
//     date: "2025-04-05",
//     matchType: "Test",
//   },
//   {
//     teams: ["Pakistan", "New Zealand"],
//     name: "Pakistan vs New Zealand",
//     status: "Finished",
//     venue: "Gaddafi Stadium",
//     date: "2025-03-28",
//     matchType: "ODI",
//   },
// ];

// const Cricket = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Testing ke liye dummy data load kar rahe hain
//   useEffect(() => {
//     // Simulate API call delay
//     setTimeout(() => {
//       setData(dummyData);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <div className="p-6 bg-gray-900 min-h-screen">
//       {/* Header Section */}
//       <h1 className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-md text-center text-3xl font-bold text-white shadow-md">
//         🏏 Live Cricket Matches
//       </h1>

//       {/* Loader & Error Handling */}
//       {loading && <p className="text-center text-white mt-4">Loading data...</p>}
//       {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}

//       {/* Live Matches Section */}
//       {data && (
//         <div className="mt-6 mx-auto w-full max-w-5xl">
//           {data.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {data.map((match, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-800 text-white p-5 rounded-lg shadow-lg border border-gray-700 transition transform hover:scale-105"
//                 >
//                   <h2 className="text-xl font-bold text-yellow-400">
//                     {match.teams ? match.teams[0] : "Team 1"} 🆚{" "}
//                     {match.teams ? match.teams[1] : "Team 2"}
//                   </h2>
//                   <p className="text-gray-300 mt-2">🏟 Venue: {match.venue}</p>
//                   <p className="text-gray-300">📅 Date: {match.date}</p>
//                   <p className="text-gray-300">
//                     🔥 Status:{" "}
//                     <span className="text-green-400">
//                       {match.status || "Upcoming"}
//                     </span>
//                   </p>
//                   <p className="text-gray-300">
//                     🏆 Match Type: {match.matchType}
//                   </p>

//                   {/* Place a Bet Button */}
//                   <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition">
//                     💰 Place a Bet
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-300">
//               No live matches available
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cricket;

import React, { useEffect, useState } from "react";
import CircularLoader from "../notUsed/CircularLoader";
import RightBar from "./RightBar";

const Cricket = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.the-odds-api.com/v4/sports/cricket_ipl/events?apiKey=b56bc5ecbededdebe803fda81142b666")       .then((response) => response.json())
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
        🔥 Upcoming IPL Matches
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
                {match.home_team} 🆚 {match.away_team}
              </h2>
              <p className="text-center text-gray-300">
                📅 {new Date(match.commence_time).toLocaleString()}
              </p>
              <button className="bg-blue-600 p-2 hover:opacity-75 mt-5">
                  Place a Bet
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cricket;
