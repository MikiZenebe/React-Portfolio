import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function NavSection() {
  return (
    <Nav>
      <h1>
        <Link to="/" id="logo">
          Neon Games
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/game">Our Games</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7.5rem;
  background-color: #282828;

  /// FIXED NAVBAR ///
  position: sticky;
  top: 0;
  z-index: 10;
  ///         ////
  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
  }

  #logo {
    font-size: 1.5rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default NavSection;
