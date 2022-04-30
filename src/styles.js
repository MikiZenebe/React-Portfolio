import { motion } from "framer-motion";
import styled from "styled-components";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 8rem;
  background-color: #1b1b1b;
  color: white;

  img {
    width: 100%;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    margin-left: 35px;
    height: 400px;
    width: 450px;
    object-fit: cover;
  }
`;

export const Hide = styled.div``;
