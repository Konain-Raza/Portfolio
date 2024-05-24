import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Grid from "./Components/Grid/Grid";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Testimonial from "./Components/Testimonials/Testimonials";
function App() {
  
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
