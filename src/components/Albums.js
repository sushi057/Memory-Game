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

  const checkScore = () => {
    if (score === 13) console.log("YOU WIN!");
  };

  const handleClick = (e) => {
    displayAlbums(shuffle(albumsData));
    if (albums.includes(e.target.alt)) {
      console.log("something");
      setScore(0);
      setAlbums([]);
    } else {
      setScore(score + 1);
      setAlbums((prev) => [...prev, e.target.alt]);
    }
  };

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const displayAlbums = (data) => {
    data.map((album) => {
      return (
        <li>
          <img src={album.src} alt={album.name} onClick={handleClick} />
          <p>{album.name}</p>
        </li>
      );
    });
  };

  useEffect(() => {
    setNewHighScore();
    checkScore();
    console.log(albums);
  }, [score, albums]);

  return (
    <div className="albums-section">
      <div className="score">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>

      <div className="cards-section">
        {shuffle(albumsData).map((album) => {
          return (
            <li>
              <img src={album.src} alt={album.name} onClick={handleClick} />
              <p>{album.name}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
