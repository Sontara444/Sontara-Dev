import React from "react";
import "./Hero.css";

import { assets } from "../Assets/assets";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="header">
              <h1>FRONTEND-REACT</h1>
              <h2>
                {" "}
                DEVELOPER
                <span>
                  {" "}
                  <img src={assets.hand_img} alt=" " />
                </span>
              </h2>

              <p>
                Hi, I'm Sontara Rajput. A passionate Front-end React Developer
                based in india.{" "}
                <span className="lolipop">
                  <img src={assets.lolipop_img} alt="" />
                </span>
              </p>

              <div className="social-icons">
                <a href="https://www.linkedin.com/in/sontararajput/">
                  <img src={assets.linkedin_img} alt="" target="_blank" />
                </a>
                <a href="https://github.com/Sontara444">
                  <img
                    className="hero-git"
                    src={assets.github_img}
                    alt=""
                    target="_blank"
                  />
                </a>
              </div>
              <div className="contact-btn">
                <div className="cv-btn hero-button">
                  <a href="https://drive.google.com/file/d/1Mr8EwBwhCZ0953r--9CdHYhdWCGkKYfU/view?usp=sharing">Download cv</a>
                </div>
                <div className="contact-me-btn hero-button">
                  <a href="/contact">Contact Me</a>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="tech-content">
                <h3>
                  Tech Slack <span className="line"></span>
                </h3>
              </div>
              <div className="skills-icon">
                <img src={assets.html_img} alt="HTML" />
                <img src={assets.css_img} alt="CSS" />
                <img src={assets.javascript_img} alt="JavaScript" />
                <img src={assets.react_img} alt="React.js" />

                <img src={assets.mongodb_img} alt="MongoDB" />
                <img src={assets.express_img} alt="Express.js" />
                <img src={assets.nodejs_img} alt="Node.js" />
                <img src={assets.react_img} alt="React.js" />

                <img src={assets.sass_img} alt="Sass" />
                <img src={assets.git_img} alt="Git" />
              </div>
            </div>
          </div>
          <div className="hero-right">
            <picture>
              <source srcSet={assets.profile2_img} type="image/webp" />
              <source srcSet={assets.profile1_img} type="image/min" />
              <img className="blob" src={assets.profile1_img} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
