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
      <div className="grid-container">
        <div className="about-text">
          <div>
            <p>
              I'm Yanzhen, an undergraduate student in my first year of studies
              in mathematics at the University of Toronto.
            </p>
            <p>
              While pursuing my studies, I have been learning web development
              skills on the side. In the future I plan to expand to software
              development, and artificial intelligence and machine learning.
            </p>
            <p>
              I'm open to any opportunities to expand my knowledge, and would
              love to have the privilege to apply my skills in a workplace
              setting!
            </p>
            <p className="about-header">Education</p>
            <p>University of Toronto</p>
            <p>Bachelors of Science</p>
            <p>Toronto, ON, Canada · September 2023 - April 2027</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
