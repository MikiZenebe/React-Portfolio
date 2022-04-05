import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import GameData from "../GameData";

//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

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
    setGame(currentGame[0]);
  }, [games, url]);
  console.log(game);
  return (
    <>
      {/* If game is avaliable show up the bottom code... */}
      {game && (
        <Details variants={pageAnimation} initial="hidden" animate="show">
          <Headline>
            <h2>{game.Title}</h2>

            <img src={game.secondCover} alt="" />
          </Headline>
          <Awards>
            {game.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ThirdImage>
            <img src={game.thirdCover} alt="" />
          </ThirdImage>
        </Details>
      )}
    </>
  );
}

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  padding-left: 2cm;
  padding-right: 2cm;
  h2 {
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;

  .line {
    background: #e04cd8;
    width: 100%;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.5rem;
  }
`;

const ThirdImage = styled.div`
  padding-left: 2cm;
  padding-right: 2cm;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};
export default GameDetail;
