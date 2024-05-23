import React, { useState } from "react";
import "./Projects.css";

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
      <h1>Recent projects </h1>

      <div className="projects-row">
        <h1 className={hoveredProject === 1 || hoveredProject === 2 ? "block-display" : "none-display"}>
          {hoveredProject === 1 ? "Mart Management" : hoveredProject === 2 ? "ATM" : "Synce"}
        </h1>
        <div
          className="project-wrapper"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="project-container">
            {/* Project 1 content */}
          </div>
        </div>
        <div
          className="project-wrapper"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="project-container">
            {/* Project 2 content */}
          </div>
        </div>
      </div>

      <div className="projects-row">
        <h1 className={hoveredProject === 3 || hoveredProject === 4 ? "block-display" : "none-display"}>
          {hoveredProject === 3 ? "ATM" : "Synce"}
        </h1>
        <div
          className="project-wrapper"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="project-container">
            {/* Project 3 content */}
          </div>
        </div>
        <div
          className="project-wrapper"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="project-container">
            {/* Project 4 content */}
          </div>
        </div>
      </div>

      <div className="projects-row">
        <h1 className={hoveredProject === 5 || hoveredProject === 6 ? "block-display" : "none-display"}>
          {hoveredProject === 5 ? "Project 5 Name" : "Synce"}
        </h1>
        <div
          className="project-wrapper"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="project-container">
            {/* Project 5 content */}
          </div>
        </div>
        <div
          className="project-wrapper"
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="project-container">
            {/* Project 6 content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
