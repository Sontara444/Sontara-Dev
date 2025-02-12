import React from "react";
import "./Projects.css";
import projectData from ".";

const Projects = () => {
  return (
    <div className="project-section">
      <p className="section-subtitle">My Portfolio</p>
      <h3 className="section-title">Recent Works</h3>
      <div className="project-card-box">
      {
        projectData.map((item, index)=>(
          <div className="project-card" key={index}>
          <div className="project-image">
            <img src={item.img} alt="E-Commerce Website" />
          </div>
          <div className="project-content">
            <h2 className="project-type">{item.highlight}</h2>
            <h1 className="project-title">{item.title}</h1>
            <p className="project-description">
              {item.description}
            </p>
            <a href={item.link} className="project-link">
              View Project
            </a>
          </div>
        </div>
        ))
      }
      </div>
      
    </div>
  );
};

export default Projects;
