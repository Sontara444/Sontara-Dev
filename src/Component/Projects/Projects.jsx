import React, { useState } from "react";
import "./Projects.css";
import projectData from "./index.js"; // Ensure this file contains the project details

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectData : projectData.slice(0, 4);

  return (
    <div className="project-section">
      <p className="section-subtitle">My Portfolio</p>
      <h3 className="section-title">Recent Works</h3>
      <div className="project-card-box">
        {visibleProjects.map((item, index) => (
          <div className={`project-card ${index === 0 ? "span-two" : ""}`} key={index}>
            <div className="project-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="project-content">
              <h2 className="project-type">{item.highlight}</h2>
              <h1 className="project-title">{item.title}</h1>
              <p className="project-description">{item.description}</p>
              <a href={item.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project <img src={item.arrow_icon} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="explore-button-container">
        <button className="explore-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Explore More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
