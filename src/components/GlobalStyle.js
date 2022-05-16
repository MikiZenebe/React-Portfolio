import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #1b1b1b;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid white;
    background-color: #1b1b1b;
    color: white;
    transition: all 0.5s ease;
     
  font-family: 'Inter', sans-serif;
    &:hover {
      background-color: white;
      color: black;
    }
  }
  
  
  img.clock, img.creative, img.teamwork{
    width: 24px;
    height: 24px;
  }
 
 h2{
   font-weight: lighter;
   font-size: 3rem;
 }

 h3{
   color: white;
 }

 h4{
   font-weight: bold;
   font-size: 2rem;
   
 };

 span{
  font-weight: bold;
   color: #e04cd8;
 }

 p{
   padding: 3rem 0rem;
   color: #ccc;
   font-size: 1.4rem;
   line-height: 150%;
 }
 
`;

export default GlobalStyle;
