import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import One from "./components/pages/One";
import Two from "./components/pages/Two";
import Three from "./components/pages/Three";
import Four from "./components/pages/Four";
import Five from "./components/pages/Five";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Router>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>
        <Navbar show={showNav} />
        <div className="main">
          <Routes>
            <Route path="/" element={<One />} />
            <Route path="/two" element={<Two />} />
            <Route path="/three" element={<Three />} />
            <Route path="/four" element={<Four />} />
            <Route path="/five" element={<Five />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
