import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "../animation";

function OurGames() {
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Game>
        <motion.h2 variants={fade}>Cyber Punk</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Link to="/game/cyber">
          <Hide>
            <motion.img
              variants={photoAnim}
              src="https://cdn.givemesport.com/wp-content/uploads/2022/02/Cyberpunk-2077-Xbox.png"
              alt="icon"
            />
          </Hide>
        </Link>
      </Game>

      <Game>
        <h2>Watchdogs Legion</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Link to="/game/watch">
          <Hide>
            <motion.img
              variants={photoAnim}
              src="https://goto.game/wp-content/uploads/2021/03/watch2.jpg"
              alt="icon"
            />
          </Hide>
        </Link>
      </Game>

      <Game>
        <h2>Far Cry 6</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Link to="/game/far">
          <Hide>
            <motion.img
              variants={photoAnim}
              src="https://i.ytimg.com/vi/qjSM3Lp7EhI/maxresdefault.jpg"
              alt="icon"
            />
          </Hide>
        </Link>
      </Game>
    </Work>
  );
}

const Work = styled(motion.div)`
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

export const Hide = styled.div`
  overflow: hidden;
`;

export default OurGames;
