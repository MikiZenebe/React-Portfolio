import React from "react";
//Import Style
import { About, Description, Hide, Image } from "../styles";

//Framer Motion
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div
          className="title"
          variants={ContDiv}
          initial="hidden"
          animate="show"
        >
          <Hide>
            <motion.h2 variants={TitleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={TitleAnim}>
              your <span>gaming </span>dream
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={TitleAnim}> comes true.</motion.h2>
          </Hide>
        </motion.div>
        <p>Visit us to play for any video game</p>
        <button>Contact us</button>
      </Description>

      <Image>
        <img
          className="game-room"
          src="https://media.karousell.com/media/photos/products/2020/8/21/offline_pc_games_1597983188_9a2915ac.jpg"
          alt="game room"
        />
      </Image>
    </About>
  );
}

//Animation
const TitleAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};
const ContDiv = {
  hidden: { x: 100 },
  show: {
    x: 0,
    ease: "easeout",
    staggerChildren: 1,
    when: "afterChildren",
    transition: { duration: 0.8 },
  },
};
export default AboutSection;
