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
              <p>Player Profile Analyzer</p>
            </div>
            <p>
              Developed a web application to showcase player statistics and
              performance metrics from League of Legends, utilizing the Riot
              Games API to collect and display player data from past matches
              played
            </p>
          </div>
          <div className="projects-header">
            <p>Patient Health Record Summarizer</p>
          </div>
          <p>
            Collaborated on a local React.js web application for simulating
            patient health records using Synthea, integrating a large language
            model sourced from Meta's Code Llama to process patient data.
          </p>
          <p>
            Utilized Together.api to extract and summarize important details
            from the health records.
          </p>
          <p>
            Designed and implemented a chatbot to respond to medical-related
            inquiries from patients
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
