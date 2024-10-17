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
            <div className="projects-header">
              <p>Personal Portfolio Webpage</p>
            </div>
            <p>
              Created a static webpage to show off my portfolio utilizing the
              React.js library, hosted by GitHub Pages.
            </p>
            <div className="projects-header">
              <p>YheChen.gg League Tracker</p>
            </div>
            <p>
              Utilized the Riot Games Api to create a React.js web application
              that can display player data.
            </p>
          </div>
          <div className="projects-header">
            <p>MedEasy Health Summarizer</p>
          </div>
          <p>
            Collaborated on a local React.js web application using Synthea to
            simulate a patient's health records, which were processed to a Code
            Llama LLM using together.api to create a summary of important
            details. TEST TESET TESTE TESET.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
