import React from "react";
import { Helmet } from "react-helmet";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimatio } from "../animation";
import styled from "styled-components";
function ContactUS() {
  return (
    <Contact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Helmet>
        <title>Contact </title>
      </Helmet>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimatio}>Get in touch</motion.h2>
        </Hide>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnimatio}>
            <Circle />
            <h2>Send us a Message</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnimatio}>
            <Circle />
            <h2>Send us a Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimatio}>
            <Circle />
            <h2>Send us a Message</h2>
          </Social>
        </Hide>
      </div>
    </Contact>
  );
}

const Contact = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: whitesmoke;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
export default ContactUS;
