import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-content">
            <div className="footer-left-content">
              <h2 className="footer-head">SONTARA RAJPUT</h2>
              <p className="footer-sub-head">
                {" "}
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>

            <div className="footer-right-content">
              <h2 className="footer-head-2">SOCIAL</h2>
              <div className="footer-icons">
                <a target="_blank" href="/" className="footer-icon">
                  <i className="fa-brands fa-linkedin fa-3x"></i>
                </a>
                <a target="_blank" href="/" className="footer-icon">
                  <i className="fa-brands fa-instagram fa-3x"></i>
                </a>
                <a target="_blank" href="/" className="footer-icon">
                  <i className="fa-brands fa-twitter fa-3x"></i>
                </a>
                <a target="_blank" href="/" className="footer-icon">
                  <i className="fa-brands fa-github fa-3x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-para">Copyright &copy; 2023, All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
