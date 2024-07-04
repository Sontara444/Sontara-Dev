import React from "react";
import "./Hero.css";

import hand_img from "../Assets/hand-icon-min.png";
import linkedin_img from "../Assets/linkedin-min.png";
import github_img from "../Assets/git-min.png";
import lolipop_img from "../Assets/location-min.png";
import html_img from "../Assets/html-min.png";
import css_img from "../Assets/css-min.png";
import javascript_img from "../Assets/javascript-min.png";
import react_img from "../Assets/react-min.png";
import sass_img from "../Assets/sass-min.png";
import mongodb_img from "../Assets/mongodb-min.png";
import nodejs_img from "../Assets/nodejs-min.png";
import profile1_img from "../Assets/profile.webp";
import profile2_img from "../Assets/profile-min.png";

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
                  <img className="git" src={github_img} alt="" target="_blank" />
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
            <picture>
              <source srcSet={profile2_img} type="image/webp" />
              <source srcSet={profile1_img} type="image/min" />
              <img  className="blob" src={profile1_img} alt="" />
              
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
