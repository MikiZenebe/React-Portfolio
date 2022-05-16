import React from "react";
//Import Style
import { About, Description, Hide, Image } from "../styles";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnimatio, fade, photoAnim } from "../animation";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimatio} initial="hidden" animate="show">
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimatio} initial="hidden" animate="show">
              your <span>gaming </span>dream
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimatio} initial="hidden" animate="show">
              {" "}
              comes true.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>Visit us to play for any video game</motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>

      <Image>
        <motion.img
          variants={photoAnim}
          className="game-room"
          src="https://media.karousell.com/media/photos/products/2020/8/21/offline_pc_games_1597983188_9a2915ac.jpg"
          alt="game room"
        />
      </Image>
    </About>
  );
}

//Animation

export default AboutSection;
