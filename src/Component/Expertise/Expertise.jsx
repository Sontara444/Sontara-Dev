import React from "react";
import "./Expertise.css";

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="expertise-wrapper">
        <h3 className="expertise-subtitle">Why choose me</h3>
        <h2 className="expertise-title">My Expertise Area</h2>

        <div className="expertise-container">
          {/* Skills Section */}
          <div className="expertise-skills">
            <h3 className="expertise-heading">My Skills</h3>
            {[
              { name: "HTML, CSS, JavaScript", percent: 85, className: "html" },
              { name: "ReactJS, NextJS, Redux", percent: 90, className: "react" },
              { name: "NodeJS, Express", percent: 85, className: "node" },
              { name: "MongoDB, Mongoose", percent: 90, className: "mongo" }
            ].map((skill, index) => (
              <div key={index} className="expertise-skill">
                <span>{skill.name} <span>{skill.percent}%</span></span>
                <div className="expertise-progress">
                  <div className={`expertise-bar expertise-${skill.className}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* What I Do Section */}
          <div className="expertise-what-i-do">
            <h3 className="expertise-heading">What I Do</h3>
            {[
              { name: "Front-end Development", percent: 95, className: "frontend" },
              { name: "Backend Development", percent: 90, className: "backend" },
              { name: "Web Design", percent: 85, className: "webdesign" },
              { name: "SEO", percent: 80, className: "seo" }
            ].map((work, index) => (
              <div key={index} className="expertise-skill">
                <span>{work.name} <span>{work.percent}%</span></span>
                <div className="expertise-progress">
                  <div className={`expertise-bar expertise-${work.className}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
