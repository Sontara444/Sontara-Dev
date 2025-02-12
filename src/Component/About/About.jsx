import React from "react";
import "./About.css";
import { assets } from "../Assets/assets";

const About = () => {
  const openCity = (evt, cityName) => {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };
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
              I’m a <strong>Frontend Web Developer</strong> passionate about
              building user-friendly and visually appealing websites and web
              applications that contribute to a product's success. Check out
              some of my work in the
              <strong>Projects</strong> section.
            </p>
            <p className="sub-head">
              I also enjoy sharing insights and experiences from my journey in
              <strong> Web Development</strong> to help others in the developer
              community. Connect with me on
              <a
                href="https://www.linkedin.com/in/sontararajput/"
                className="linkedin"
              >
                LinkedIn
              </a>
              , where I regularly post valuable content related to
              <strong> Web Development</strong> and <strong>Programming</strong>
              .
            </p>

            <div className="tab-container">
              <div className="tab">
                <button
                  onClick={(event) => openCity(event, "London")}
                  className="tablinks active"
                >
                  Education
                </button>
                <button
                  onClick={(event) => openCity(event, "Paris")}
                  className="tablinks "
                >
                  Personal
                </button>
                <button
                  onClick={(event) => openCity(event, "Tokyo")}
                  className="tablinks"
                >
                  Interest
                </button>
              </div>
              <div className="tab-wrapper">
                <div id="London" className="tabcontent active">
                  <h2 className="active">Education</h2>
                  <div className="education-details">
                    <div className="education-item ">
                      <h3>Delhi University - PGDAV College </h3>
                      <p>Bachelor of Commerce </p>
                      <div className="education-year">
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>2019-2022</p>
                      </div>
                    </div>
                    <div className="education-item">
                      <h3>Government girls senior secondary School </h3>
                      <p>AISSCE (Class XII) - Commerce</p>
                      <div className="education-year">
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>2018-2019</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="Paris" className="tabcontent">
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
                <div id="Tokyo" className="tabcontent">
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
      {/* <Work/> */}
      {/* <Contact/> */}
    </>
  );
};

export default About;
