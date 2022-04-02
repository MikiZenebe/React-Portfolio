import React from "react";
import styled from "styled-components";
import { About } from "../styles";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <div className="questions">
        <h4>How can I play online</h4>
        <div className="answers">
          <p>
            Lorem ipusm, dolor sit amet consectetur adispisicing Necessitatibus,
            neque.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="questions">
        <h4>Can I get the latest games</h4>
        <div className="answers">
          <p>
            Lorem ipusm, dolor sit amet consectetur adispisicing Necessitatibus,
            neque.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="questions">
        <h4>What kind of setup do you suggest for gaming</h4>
        <div className="answers">
          <p>
            Lorem ipusm, dolor sit amet consectetur adispisicing Necessitatibus,
            neque.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .questions {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answers {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;