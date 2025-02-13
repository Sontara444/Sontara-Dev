import React from "react";
import "./Expertise.css";

const Expertise = () => {
  return (
    <section className="expertise">
      <div className="expertise-wrapper">
        <h2 className="expertise-title">Skills</h2>
        <p className="expertise-description">
        Building responsive and user-friendly web applications with modern technologies.
        </p>

        <div className="expertise-container">
          <div className="expertise-column">
            {[
              { name: "HTML5, CSS3, JavaScript", percent: 95 },
              { name: "React.js, Redux", percent: 90 },
              { name: "React Hooks", percent: 95 },
              { name: "TailwindCSS, Figma", percent: 80 },
            ].map((skill, index) => (
              <div key={index} className="expertise-skill">
                <span>
                  {skill.name} <span>{skill.percent}%</span>
                </span>
                <div className="expertise-progress">
                  <div
                    className="expertise-bar"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="expertise-column">
            {[
              { name: "MongoDB, Mongoose", percent: 95 },
              { name: "Node.js, Express.js", percent: 80 },
              { name: "Netlify & Vercel", percent: 95 },
              { name: "Git, GitHub Actions", percent: 90 },
            ].map((skill, index) => (
              <div key={index} className="expertise-skill">
                <span>
                  {skill.name} <span>{skill.percent}%</span>
                </span>
                <div className="expertise-progress">
                  <div
                    className="expertise-bar"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
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
