import React, { useState } from "react";
import "./Projects.css";
import SyncedImg from "../../assets/Images/Synced.png";
import tackleitimg from "../../assets/Images/tackleit.png";
import sundownimg from "../../assets/Images/Sundown.png";
import rankedvoteimg from "../../assets/Images/Ranked-Vote.png";
import martimg from "../../assets/Images/mart.png";
import quoteimg from "../../assets/Images/quotequirk.png";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div id="projects">
      <h1 className="main-headings">Fresh Endeavors: Recent Ventures</h1>

      <div className="projects-row">
        <div className="project-wrapper">
          <h1>Synced</h1>
          <a href="https://lets-synced.vercel.app/" target="_blank">
            <div className="project-container">
              <img src={SyncedImg} alt="" />
            </div>
          </a>
        </div>
        <div className="project-wrapper">
          <h1>Tackleit</h1>

          <a href="https://tackleit.netlify.app/" target="_blank">
            <div className="project-container">
              <img src={tackleitimg} alt="" />
            </div>
          </a>
        </div>
      </div>

      <div className="projects-row">
        <div className="project-wrapper">
          <h1>Sundown Studio</h1>

          <a href="https://sundown-studioo.vercel.app/" target="_blank">
            <div className="project-container">
              <img src={sundownimg} alt="" target="blank" />
            </div>
          </a>
        </div>
        <div className="project-wrapper">
          <h1>Ranked Vote</h1>

          <a href="https://ranked-vote.netlify.app/" target="_blank">
            <div className="project-container">
              <img src={rankedvoteimg} alt="Ranked Vote Image" />
            </div>
          </a>
        </div>
      </div>

      <div className="projects-row">
        <div className="project-wrapper">
          <h1>Quote Quirk</h1>

          <a href="https://quote-quirk.vercel.app/" target="blank">
            <div className="project-container">
              <img src={quoteimg} alt="" />
            </div>
          </a>
        </div>
        <div className="project-wrapper">
          <h1>Mart Management System</h1>

          <a href="https://drive.google.com/file/d/1mcZstnCnnYrsLOXaZ_f_x-Nhl3Gjadl6/view?usp=sharing" target="blank">
            <div className="project-container">
              <img src={martimg} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
