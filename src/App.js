import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer animation={"fade-up"} />
    </div>
  );
}

export default App;
