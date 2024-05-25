// NavBar.js
import React from "react";
import "./NavBar.css";

const NavBar = ({ locoScroll }) => {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    locoScroll.scrollTo(target);
  };

  return (
    <div id="navbar">
      <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>About</a>
      <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>Projects</a>
      <a href="#allcomments" onClick={(e) => handleLinkClick(e, "#allcomments")}>Testimonial</a>
      <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>Contact</a>
    </div>
  );
};

export default NavBar;
