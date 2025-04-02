// NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-black flex justify-center items-center h-screen text-white">
      <div className="text-center p-6">
        <h1 className="text-8xl font-extrabold text-gradient mb-4 animate__animated animate__fadeIn animate__delay-1s">
          404
        </h1>
        <p className="text-3xl mb-4">Oops! Page Not Found.</p>
        <p className="text-xl mb-4">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="bg-yellow-500 text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all duration-300">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
