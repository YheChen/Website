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
      <div className="grid-container">
        <div className="projects-text">
          <div>
            <p>This page is under development!</p>
            <div className="projects-header">
              <p>Personal Portfolio Webpage</p>
            </div>
            <p>
              Utilized HTML, CSS, JavaScript and React.js to develop a static
              webpage hosted by Netlify.
            </p>
            <p>
              test test test test test test test test test test test test test
              test
            </p>
            <p>
              test test test test test test test test test test test test test
              test
            </p>
            <p>
              test test test test test test test test test test test test test
              test
            </p>
            <p>
              test test test test test test test test test test test test test
              test
            </p>
            <p>
              test test test test test test test test test test test test test
              test
            </p>
            <p>
              test test test test test test test test test test test test test
              test
            </p>
            <p>
              test test test test test test test test test test test test test
              test
            </p>
            <p>
              test test test test test test test test test test test test test
              test
            </p>
            <p>
              test test test test test test test test test test test test test
              test
            </p>
            <div className="projects-header">
              <p>YheChen.gg League Tracker</p>
            </div>
            <p>
              Utilized the Riot Games Api to create a web application that can
              display player data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
