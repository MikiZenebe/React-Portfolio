import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import GameData from "../GameData";

function GameDetail() {
  const location = useLocation();
  const url = location.pathname;

  //games state will hold the game data...
  const [games, setGames] = useState(GameData);

  //extract every game based on the url...
  const [game, setGame] = useState(null);

  //access the game data with url and display every render...
  useEffect(() => {
    const currentGame = games.filter((GameData) => GameData.url === url);
    setGame(currentGame);
  }, [games, url]);
  return (
    <div>
      <h1>Game Detail</h1>
    </div>
  );
}

export default GameDetail;
