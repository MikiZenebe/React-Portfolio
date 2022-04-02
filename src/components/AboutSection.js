import React from "react";
//Import Style
import { About, Description, Hide, Image } from "../styles";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>gaming </span> dream comes
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
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

//Styled Component

export default AboutSection;
