import React, { useState } from "react";

const CricketGame = () => {
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [commentary, setCommentary] = useState("Tap 'Play Ball' to start!");
  const [tossWinner, setTossWinner] = useState(null);
  const [batting, setBatting] = useState(null);

  const possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];

  const tossCoin = () => {
    const winner = Math.random() > 0.5 ? "You" : "Opponent";
    setTossWinner(winner);
    setBatting(winner === "You" ? "Batting" : "Bowling");
    setCommentary(`${winner} won the toss and chose to bat!`);
  };

  const playBall = () => {
    if (balls >= overs * 6 || wickets >= 2) {
      setGameOver(true);
      setCommentary("Game Over! Click 'Restart' to play again.");
      return;
    }

    const outcome = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

    if (outcome === "W") {
      setWickets((prev) => prev + 1);
      setCommentary("Wicket! A batsman is out!");
    } else {
      setScore((prev) => prev + outcome);
      setCommentary(`Scored ${outcome} runs!`);
    }

    setBalls((prev) => prev + 1);

    if (balls + 1 >= overs * 6 || wickets >= 2) {
      setGameOver(true);
      setCommentary("Game Over! Click 'Restart' to play again.");
    }
  };

  const restartGame = () => {
    setScore(0);
    setWickets(0);
    setBalls(0);
    setGameOver(false);
    setTossWinner(null);
    setBatting(null);
    setCommentary("Tap 'Play Ball' to start!");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">🏏 Cricket Simulation Game</h1>

      {!tossWinner ? (
        <button onClick={tossCoin} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold">Toss Coin 🪙</button>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80">
          <p className="text-lg font-semibold mb-2">Toss Winner: {tossWinner}</p>
          <p className="text-lg font-semibold mb-2">Batting: {batting}</p>
          <p className="text-lg font-semibold mb-2">Score: {score}</p>
          <p className="text-lg font-semibold mb-2">Wickets: {wickets}/2</p>
          <p className="text-lg font-semibold mb-4">Balls: {balls}/{overs * 6}</p>

          <p className="text-yellow-300 mb-4">{commentary}</p>

          {!gameOver ? (
            <button onClick={playBall} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-bold">Play Ball 🎾</button>
          ) : (
            <button onClick={restartGame} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-bold">Restart 🔄</button>
          )}
        </div>
      )}
    </div>
  );
};

export default CricketGame;
