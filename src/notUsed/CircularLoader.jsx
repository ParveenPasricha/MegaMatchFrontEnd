import React, { useEffect, useState } from "react";

const CircularLoader = () => {
  const [progress, setProgress] = useState(0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <svg width="120" height="120" viewBox="0 0 120 120" className="rotate-[-90deg]">
        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#ccc"
          strokeWidth="10"
          fill="none"
          opacity="0.2"
        />
        {/* Progress Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#ccc"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-75"
        />
        {/* Rotated Percentage Text */}
        <text 
          x="60"
          y="65"
          textAnchor="middle"
          fontSize="20"
          fill="#ccc"
          fontWeight="bold"
          transform="rotate(90 60 60)"  
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default CircularLoader;
