import "./projects.css";
import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <button className="projectspg-home-button">Home</button>
        </Link>
        <Link to="/about">
          <button className="projectspg-about-button">About Me</button>
        </Link>
        <button className="projectspg-projects-button">Projects</button>
      </div>
      <div className="projects-text">
        <p>No Projects!</p>
      </div>
    </div>
  );
}

export default Projects;
