import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <div className="footer-left-content">
            <h2 className="footer-head">SONTARA RAJPUT</h2>
            <p className="footer-sub-head">
              A Full-Stack Developer building scalable
              Websites and Web Applications that lead to the success of the
              overall product.
            </p>
          </div>

          <div className="footer-right-content">
            <h2 className="footer-head-2">SOCIAL</h2>
            <div className="footer-icons">
              <a target="_blank" href="https://linkedin.com" className="footer-icon" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </a>
              <a target="_blank" href="https://instagram.com" className="footer-icon" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram fa-2x"></i>
              </a>
              <a target="_blank" href="https://twitter.com" className="footer-icon" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter fa-2x"></i>
              </a>
              <a target="_blank" href="https://github.com" className="footer-icon" rel="noopener noreferrer">
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-para">
          &copy; {currentYear} Sontara Rajput | Made with <span style={{ color: "#e25555" }}>&hearts;</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
