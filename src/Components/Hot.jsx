import React, { useState, useEffect } from "react";

const Hot = () => {
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    // Dummy Trending Cricket News Data (Replace with API later)
    setTrendingNews([
      {
        id: 1,
        title: "Virat Kohli scores fastest century in IPL history!",
        description: "Kohli smashes a record-breaking century in just 45 balls.",
      },
      {
        id: 2,
        title: "MS Dhoni hints at retirement after IPL 2025?",
        description: "Speculations arise as Dhoni speaks about his future in IPL.",
      },
      {
        id: 3,
        title: "Hardik Pandya leads MI to a thrilling last-ball victory!",
        description: "MI secures a dramatic win in a high-pressure chase.",
      },
    ]);
  }, []);

  return (
    <div className="bg-green-700 min-h-screen text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">🔥 Hot Cricket News</h1>
      <div className="w-full max-w-lg space-y-4">
        {trendingNews.map((news) => (
          <div key={news.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
            <p className="text-sm text-gray-300">{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hot;