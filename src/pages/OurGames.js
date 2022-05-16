import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Framer Motion
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim, slide } from "../animation";
import Scroll from "../components/Scroll";

function OurGames() {
  const [element, controls] = Scroll();
  const [element2, controls2] = Scroll();
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <Frame1 variants={slide}></Frame1>
      <Frame2 variants={slide}></Frame2>
      <Frame3 variants={slide}></Frame3>
      <Frame4 variants={slide}></Frame4>
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

      <Game ref={element} variants={fade} animate={controls} initial="hidden">
        <motion.h2 variants={fade}>Watchdogs Legion</motion.h2>
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

      <Game ref={element2} variants={fade} animate={controls2} initial="hidden">
        <motion.h2 variants={fade}>Far Cry 6</motion.h2>
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
const Game = styled(motion.div)`
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

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0%;
  top: 10%;
  width: 100%;
  height: 100vh;

  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: -webkit-linear-gradient(top, #ff5db1 0%, #7a0156 100%);
`;

const Frame3 = styled(Frame1)`
  background: -webkit-linear-gradient(top, #ff3019 0%, #5b0101 100%);
`;

const Frame4 = styled(Frame1)`
  background: -webkit-linear-gradient(
    top,
    #b7deed 0%,
    #21b4e2 0%,
    #116360 100%,
    #71ceef 100%
  );
`;

export default OurGames;
