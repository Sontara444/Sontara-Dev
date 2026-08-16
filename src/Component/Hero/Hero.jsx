import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

import { assets } from "../Assets/assets";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="header">
              <h1>FULL-STACK</h1>
              <h2>
                {" "}
                DEVELOPER
                <span>
                  {" "}
                  <img src={assets.hand_img} alt=" " className="wave-hand" />
                </span>
              </h2>

              <p>
                Hi, I'm Sontara Rajput. A passionate Full-Stack Developer
                based in India.{" "}
                <span className="lolipop">
                  <img src={assets.lolipop_img} alt="" />
                </span>
              </p>

              <div className="social-icons">
                <a href="https://www.linkedin.com/in/sontararajput/" target="_blank" rel="noopener noreferrer">
                  <img src={assets.linkedin_img} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Sontara444" target="_blank" rel="noopener noreferrer">
                  <img
                    className="hero-git"
                    src={assets.github_img}
                    alt="GitHub"
                  />
                </a>
              </div>
              <div className="contact-btn">
                <div className="cv-btn hero-button">
                  <a href="https://drive.google.com/file/d/1Mr8EwBwhCZ0953r--9CdHYhdWCGkKYfU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
                </div>
                <div className="contact-me-btn hero-button">
                  <Link to="/contact">Contact Me</Link>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="tech-content">
                <h3>
                  Tech Stack <span className="line"></span>
                </h3>
              </div>
              <div className="skills-icon">
                <img src={assets.html_img} alt="HTML" loading="lazy" />
                <img src={assets.css_img} alt="CSS" loading="lazy" />
                <img src={assets.javascript_img} alt="JavaScript" loading="lazy" />
                <img src={assets.react_img} alt="React.js" loading="lazy" />

                <img src={assets.mongodb_img} alt="MongoDB" loading="lazy" />
                <img src={assets.express_img} alt="Express.js" loading="lazy" />
                <img src={assets.nodejs_img} alt="Node.js" loading="lazy" />

                <img src={assets.sass_img} alt="Sass" loading="lazy" />
                <img src={assets.git_img} alt="Git" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="hero-right">
            <picture>
              <source srcSet={assets.profile1_img} type="image/webp" />
              <source srcSet={assets.profile2_img} type="image/png" />
              <img className="blob" src={assets.profile1_img} alt="Profile" fetchpriority="high" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
