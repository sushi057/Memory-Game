import React from "react";

function Header() {
  return (
    <div className="header">
      <h1>Memory-Game</h1>
      <h3>Pink Floyd Edition</h3>
    </div>
  );
}

export default Header;

//Clicking on a album adds a score,
//clicking another album other than that will add another score
//if clicked on an album already clicked, score resets
//
