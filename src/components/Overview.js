import React from "react";
import albumsData from "../albums";

const Overview = () => {
  return (
    <div>
      <ul>
        {albumsData.map((album) => {
          return (
            <li>
              <img src={album.src} alt={album.name} />
              <p>{album.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
console.log(albumsData);

export default Overview;
