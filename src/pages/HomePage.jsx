import React from "react";

import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";

const HomePage = () => {
  return (
    <>
      <Home animation="fade-down" />
      <Services animation="fade-down" />
      <Portfolio animation="fade-down" />
      <About animation="fade-down" />
    </>
  );
};

export default HomePage;
