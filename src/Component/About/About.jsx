import React, { useState } from "react";
import "./About.css";
import { assets } from "../Assets/assets";
import Expertise from "../Expertise/Expertise";

const About = () => {
  const [activeTab, setActiveTab] = useState("London");

  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="about-left">
            <div
              className="image-border"
              style={{ backgroundImage: `url(${assets.profile_img})` }}
            >
              <div
                className="main-image"
                style={{ backgroundImage: `url(${assets.profile_img})` }}
              ></div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-heading">
              <h2 className="about-black">ABOUT </h2>
              <h2 className="about-blue"> ME</h2>
            </div>

            <p className="sub-head">
              I’m a <strong>Full-Stack Developer</strong> passionate about
              building user-friendly and visually appealing websites and web
              applications that contribute to a product's success. Check out
              some of my work in the <strong>Projects</strong> section.
            </p>
            <p className="sub-head">
              I also enjoy sharing insights and experiences from my journey in
              <strong> Web Development</strong> to help others in the developer
              community. Connect with me on <a
                href="https://www.linkedin.com/in/sontararajput/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>, where I regularly post valuable content related to
              <strong> Web Development</strong> and <strong>Programming</strong>.
            </p>

            <div className="tab-container">
              <div className="tab">
                <button
                  onClick={() => setActiveTab("London")}
                  className={`tablinks ${activeTab === "London" ? "active" : ""}`}
                >
                  Education
                </button>
                <button
                  onClick={() => setActiveTab("Paris")}
                  className={`tablinks ${activeTab === "Paris" ? "active" : ""}`}
                >
                  Personal
                </button>
                <button
                  onClick={() => setActiveTab("Tokyo")}
                  className={`tablinks ${activeTab === "Tokyo" ? "active" : ""}`}
                >
                  Interest
                </button>
              </div>
              <div className="tab-wrapper">
                <div id="London" className={`tabcontent ${activeTab === "London" ? "active" : ""}`} style={{ display: activeTab === "London" ? "block" : "none" }}>
                  <h2 className="active">Education</h2>
                  <div className="education-details">
                    <div className="education-item ">
                      <h3>University of Delhi - PGDAV College </h3>
                      <p>Bachelor of Commerce </p>
                      <div className="education-year">
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>2019-2023</p>
                      </div>
                    </div>
                    <div className="education-item">
                      <h3>Government girls senior secondary School </h3>
                      <p>CBSE (Class XII) - Commerce</p>
                      <div className="education-year">
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>2018-2019</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="Paris" className={`tabcontent ${activeTab === "Paris" ? "active" : ""}`} style={{ display: activeTab === "Paris" ? "block" : "none" }}>
                  <h2>Personal Information</h2>
                  <div className="personal-details">
                    <div className="personal-icons">
                      <i className="fa-solid fa-user"></i>
                      <div className="personal-item">
                        <h3>Name : </h3>
                        <p>Sontara Rajput</p>
                      </div>
                    </div>

                    <div className="personal-icons">
                      <i className="fa-solid fa-phone"></i>
                      <div className="personal-item">
                        <h3>Phone : </h3>
                        <p>+91 8882534230</p>
                      </div>
                    </div>

                    <div className="personal-icons">
                      <i className="fa-solid fa-envelope"></i>
                      <div className="personal-item">
                        <h3>Email : </h3>
                        <p>sontara.dev@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="Tokyo" className={`tabcontent ${activeTab === "Tokyo" ? "active" : ""}`} style={{ display: activeTab === "Tokyo" ? "block" : "none" }}>
                  <h2>Interests</h2>
                  <div className="interests">
                    <ul className="interests-list">
                      <div className="interests-icons">
                        <i className="fa-solid fa-music"></i>
                        <li>Music</li>
                      </div>
                      <div className="interests-icons">
                        <i className="fa-solid fa-code"></i>
                        <li>Coding</li>
                      </div>
                      <div className="interests-icons">
                        <i className="fa-solid fa-utensils"></i>
                        <li>Food</li>
                      </div>
                      <div className="interests-icons">
                        <i className="fa-solid fa-suitcase-rolling"></i>
                        <li>Travel</li>
                      </div>
                      <div className="interests-icons">
                        <i className="fa-solid fa-palette"></i>
                        <li>Painting</li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Expertise/>
    </>
  );
};

export default About;
