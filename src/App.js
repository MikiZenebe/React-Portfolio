import React from "react";
import GlobalStyle from "./components/GlobalStyle";
//Pages
import AboutUs from "./pages/AboutUs";
import NavSection from "./components/NavSection";
import ContactUS from "./pages/ContactUS";
import OurGames from "./pages/OurGames";
import GameDetail from "./pages/GameDetail";
//Router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavSection />

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/game" element={<OurGames />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/contact" element={<ContactUS />} />
      </Routes>
    </div>
  );
}

export default App;
