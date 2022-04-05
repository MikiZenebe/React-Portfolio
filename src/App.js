import React from "react";
import GlobalStyle from "./components/GlobalStyle";
//Pages
import AboutUs from "./pages/AboutUs";
import NavSection from "./components/NavSection";
import ContactUS from "./pages/ContactUS";
import OurGames from "./pages/OurGames";
import GameDetail from "./pages/GameDetail";

import { AnimatePresence } from "framer-motion";
//Router
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle />
      <NavSection />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/game" element={<OurGames />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/contact" element={<ContactUS />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
