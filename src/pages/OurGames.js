import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function OurGames() {
  return (
    <Work>
      <Game>
        <h2>Cyber Punk</h2>
        <div className="line"></div>

        <Link to="">
          <img
            src="https://cdn.givemesport.com/wp-content/uploads/2022/02/Cyberpunk-2077-Xbox.png"
            alt="icon"
          />
        </Link>
      </Game>

      <Game>
        <h2>Watchdogs Legion</h2>
        <div className="line"></div>

        <Link to="">
          <img
            src="https://goto.game/wp-content/uploads/2021/03/watch2.jpg"
            alt="icon"
          />
        </Link>
      </Game>

      <Game>
        <h2>Far Cry 6</h2>
        <div className="line"></div>

        <Link to="">
          <img
            src="https://i.ytimg.com/vi/qjSM3Lp7EhI/maxresdefault.jpg"
            alt="icon"
          />
        </Link>
      </Game>
    </Work>
  );
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 7.5rem;

  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;
const Game = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: white;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default OurGames;
