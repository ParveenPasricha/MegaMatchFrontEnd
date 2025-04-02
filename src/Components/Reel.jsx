import React, { useState, useEffect } from "react";

const Reel = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    // Dummy Cricket Reels Data (Replace with API later)
    setReels([
      {
        id: 1,
        title: "Virat Kohli's Stunning Cover Drive!",
        videoUrl: "https://www.youtube.com/embed/cbao-z4frp8", // Replace with actual video links
      },
      {
        id: 2,
        title: "MS Dhoni's Last Ball Six to Win the Match!",
        videoUrl: "https://www.youtube.com/shorts/cbao-z4frp8",
      },
      {
        id: 3,
        title: "Babar Azam's Classic Century Highlights",
        videoUrl: "https://www.youtube.com/shorts/cbao-z4frp8",
      },
    ]);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Cricket Reels 🎥</h1>
      <div className="space-y-6 w-full max-w-lg">
        {reels.map((reel) => (
          <div key={reel.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2">{reel.title}</h2>
            <iframe
              src={reel.videoUrl}
              width="100%"
              height="250"
              allow="autoplay"
              className="rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reel;