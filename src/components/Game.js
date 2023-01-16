import React, { useState } from "react";
import Overview from "./Overview";

function Game() {
  const [score, setScore] = useState(0);
  return (
    <div>
      <Overview />
    </div>
  );
}

export default Game;
