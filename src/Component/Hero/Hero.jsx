import React from "react";
import "./Hero.css";

import hand_img from "../Assets/hand-icon.png";
import linkedin_img from "../Assets/linkedin.png";
import github_img from "../Assets/github.png";
import lolipop_img from "../Assets/location.png";
import html_img from "../Assets/html.png";
import css_img from "../Assets/css.png";
import javascript_img from "../Assets/javascript.png";
import react_img from "../Assets/react.png";
import sass_img from "../Assets/sass.png";
import mongodb_img from "../Assets/mongodb.png";
import nodejs_img from "../Assets/nodejs.png";
import profile_img from "../Assets/profile.png";

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
                  <img src={hand_img} alt=" " />
                </span>
              </h2>

              <p>
                Hi, I'm Sontara Rajput. A passionate Front-end React Developer
                based in india.{" "}
                <span className="lolipop">
                  <img src={lolipop_img} alt="" />
                </span>
              </p>

              <div className="social-icons">
                <a href="https://www.linkedin.com/in/sontararajput/">
                  <img src={linkedin_img} alt="" target="_blank" />
                </a>
                <a href="https://github.com/Sontara444">
                  <img src={github_img} alt="" target="_blank" />
                </a>
              </div>
              <div className="contact-btn">
                <div className="cv-btn hero-button">
                  <a href="./cv/cv.pdf">Download cv</a>
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
                  <img src={html_img} alt="" />
                  <img src={css_img} alt="" />
                  <img src={javascript_img} alt="" />
                  <img src={react_img} alt="" />
                  <img src={sass_img} alt="" />
                  <img src={mongodb_img} alt="" />
                  <img src={nodejs_img} alt="" />
                </div>
              </div>
          </div>
          <div className="hero-right">
            <div className="blob">{/* <img src={profile_img} alt="" /> */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
