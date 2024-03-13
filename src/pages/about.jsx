import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <button className="aboutpg-home-button">Home</button>
        </Link>
        <button className="aboutpg-about-button">About Me</button>
        <Link to="/projects">
          <button className="aboutpg-projects-button">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
