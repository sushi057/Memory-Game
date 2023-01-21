import React, { useState, useEffect } from "react";
import albumsData from "../albums";
import "../styles/albums.css";

const Overview = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [albums, setAlbums] = useState([]);

  const setNewHighScore = () => {
    if (score > highScore) setHighScore(score);
  };

  const handleClick = (e) => {
    if (albums.includes(e.target.alt)) {
      console.log("something");
      setScore(0);
      setAlbums([]);
    } else {
      setScore(score + 1);
      setAlbums((prev) => [...prev, e.target.alt]);
    }
  };
  useEffect(() => {
    setNewHighScore();
    console.log(albums);
  }, [score, albums]);

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
              <img src={album.src} alt={album.name} onClick={handleClick} />
              <p>{album.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Overview;
