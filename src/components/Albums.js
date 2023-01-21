import React, { useState, useEffect } from "react";
import albumsData from "../albums";
import "../styles/albums.css";

const Overview = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const setNewHighScore = () => {
    if (score > highScore) setHighScore(score);
  };

  useEffect(() => {
    setNewHighScore();
    console.log("useEffect");
  }, [score]);

  return (
    <div>
      <div className="score">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
      <ul>
        {albumsData.map((album) => {
          return (
            <li>
              <img
                src={album.src}
                alt={album.name}
                onClick={() => setScore(score + 1)}
              />
              <p>{album.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Overview;
