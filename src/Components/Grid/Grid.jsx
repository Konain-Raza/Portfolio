import React from "react";
import techimg from "../../assets/Images/tech-enthusiast.png";
import codeimg from "../../assets/Images/code.png";
import "./Grid.css";
import js from "../../assets/Images/javascript.png";
import cplus from "../../assets/Images/c++.png";
import dart from "../../assets/Images/dart.png";
import react from "../../assets/Images/react.png";
import html from "../../assets/Images/html.png";
import css from "../../assets/Images/css.png";
// import python from "../../assets/Images/python.png";
import net from "../../assets/Images/net.png"
import flutter from "../../assets/Images/flutter.png"
import git from "../../assets/Images/git.png"
import github from "../../assets/Images/github.png"
import bootstrap from "../../assets/Images/bootstrap.png"
import tailwind from "../../assets/Images/tailwind.png"
import firebaselogo from "../../assets/Images/firebase.png"

import sqlimg from "../../assets/Images/sql-server.png"





const Grid = () => {
  const copyToClipboard = () => {
    const text = "konainraza105@gmail.com";
    navigator.clipboard.writeText(text);
  }
  return (
    <div id="grid">
      <div id="grid-1">
        <div id="grid1-left">
          <h3 className="grid-headings">
          Success blooms in the garden of client collaboration, nurtured by transparent conversation.
          </h3>
        </div>
        <div id="grid1-right">
          <div id="time-flex">
            <h3 className="grid-headings">
            Across time's canvas, I paint conversations with ease.
            </h3>
          </div>
          <div id="tech-stack">
            <div id="techstack-content">
              <p>Ever evolving, perpetually refining.</p>
              <h3>My Tech Stack</h3>
            </div>
            <div id="mar">
              <div id="marquee-up">
                <img src={sqlimg} alt="" />
                <img src={flutter} alt="" />
                <img src={tailwind} alt="" />
                <img src={bootstrap} alt="" />
                <img src={net} alt="" />
                <img src={github} alt="" />
                <img src={git} alt="" />
                <img src={bootstrap} alt="" />
                <img src={bootstrap} alt="" />

              </div>
              <div id="marquee-down">
                <img src={js} alt="" />
                <img src={cplus} alt="" />
                <img src={dart} alt="" />
                <img src={react} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="grid-2">
        <div id="grid2-left">
          <div id="tech-enthusiast">
            <h3>Passionate developer, wielding a love for tech.</h3>
            <img src={techimg} alt="" />
          </div>
          <div id="start-project">
            <h3 className="grid-headings">
            Ready to team up for a project?
            </h3>
            <button id="copy-btn" onClick={copyToClipboard}>
              {" "}
              <i className="ri-file-copy-line"></i>Copy my Email Address
            </button>
          </div>
        </div>
        <div id="grid2-right">
          <img src={codeimg} alt="" />
          <p>The Inside Scoop</p>
          <h3>Currently building a bulk certificate maker</h3>
        </div>
      </div>
    </div>
  );
};

export default Grid;
