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
            <p className="paragraph-text">
              I'm Yanzhen, an undergraduate student in my first year of studies
              in mathematics at the University of Toronto.
            </p>
            <p className="paragraph-text">
              While pursuing my studies, I have been learning web development
              skills on the side. In the future I plan to expand to software
              development, and artificial intelligence and machine learning.
            </p>
            <p className="paragraph-text">
              I'm open to any opportunities to expand my knowledge, and would
              love to have the privilege to apply my skills in a workplace
              setting!
            </p>
            <div className="about-header">
              <p>Education</p>
            </div>
          </div>
          <div className="education-text">
            <p className="university-text">University of Toronto</p>
            <p className="degree-text">Bachelors of Science</p>
            <p className="locodate-text">
              Toronto, ON, Canada · September 2023 - April 2027
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
