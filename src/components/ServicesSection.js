import React from "react";
import styled from "styled-components";

import Scroll from "./Scroll";
import { fade } from "../animation";
//Import Styles
import { About, Description, Image } from "../styles";

function ServicesSection() {
  const [element, controls] = Scroll();

  return (
    <Services ref={element} variants={fade} animate={controls} initial="hidden">
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          {/* Card 1 */}
          <Card>
            <div className="icon">
              <img
                className="clock"
                src="https://www.svgrepo.com/show/168794/clock.svg"
                alt=""
              />
              <h3>Efficiet </h3>
            </div>
            <p>lorem ipsum dolor sit amet.</p>
          </Card>
          {/* Card 2 */}

          <Card>
            <div className="icon">
              <img
                className="creative"
                src="https://www.svgrepo.com/show/279353/idea-creative.svg"
                alt=""
              />
              <h3>Creative </h3>
            </div>
            <p>lorem ipsum dolor sit amet.</p>
          </Card>
          {/* Card 4 */}
        </Cards>
      </Description>
      <Image>
        <img
          src="https://i.insider.com/5c2a81c92a5b7475f331e0b4?width=700"
          alt=""
        />
      </Image>
    </Services>
  );
}

//Custom style
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }

  @media (max-width: 1300px) {
    margin: 2rem 0 0 0;
    display: block;

    text-align: center;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-right: 9rem;
      border: solid white;
      color: white;
      padding: 1rem;
      border-radius: 5px;
    }
  }

  @media (max-width: 1300px) {
    margin: 0 0 0 2rem;
  }
`;
export default ServicesSection;
