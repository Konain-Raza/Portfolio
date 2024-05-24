import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Grid from "./Components/Grid/Grid";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Testimonial from "./Components/Testimonials/Testimonials";
import LocomotiveScroll from "locomotive-scroll";
function App() {
 

const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div id="main">
      
      <NavBar />
      <Hero />
      <Grid />
      <Projects />
      <Testimonial />
      
      <Contact />
    </div>
  );
}

export default App;
