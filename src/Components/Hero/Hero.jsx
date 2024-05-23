import React from "react";
import "./Hero.css";
import spotlight from "../../assets/Images/spotlight.png";
const Hero = () => {
  return (
    <div id="hero">
      <img src={spotlight} alt="" id="spotlight-1" />
      <img src={spotlight} alt="" id="spotlight-2" />
      <h5>Transformative Web Sorcery Unleashed</h5>

      <h1>Imagination to Mastery: Crafting Adventures Beyond Boundaries</h1>
      <h3>
        Salutations! I'm Konain, a digital virtuoso conjuring magic from
        Pakistan, where pixels dance to the rhythm of my code.
      </h3>
      <button>
        See my work <i class="ri-arrow-right-up-line"></i>
      </button>
    </div>
  );
};

export default Hero;
