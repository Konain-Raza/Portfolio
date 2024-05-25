import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Grid from "./Components/Grid/Grid";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Testimonial from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
      document.title = document.hidden
        ? "Twist Time! Don't Blink!"
        : "Konain's Artistic Odyssey";
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div id="main">
      <NavBar locoScroll={locomotiveScroll} />
      <Hero locoScroll={locomotiveScroll}/>
      <Grid locoScroll={locomotiveScroll}/>
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
