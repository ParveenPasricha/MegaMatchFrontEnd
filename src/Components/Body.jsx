import React from "react";
import Slider from "./Slider";
import Headline from "./Headline";

const Body = () => {
  return (
    <div className="text-center text-white min-h-screen">
      <Slider />

      <h1 className="text-black bg-red-500 font-bold text-2xl mt-4 p-4">
        Welcome to Cricket Dashboard 🏏
      </h1>

      {/* Tabs Section - Grid Layout for Responsive Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">🏆 Latest Match Highlights</h2>
          <p>The best moments from recent matches.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">🏆 Latest Match Highlights</h2>
          <p>The best moments from recent matches.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">📅 Upcoming Matches</h2>
          <p>Stay updated with upcoming fixtures.</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">📅 Upcoming Matches</h2>
          <p>Stay updated with upcoming fixtures.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
