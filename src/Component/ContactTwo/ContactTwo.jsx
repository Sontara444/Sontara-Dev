import React from "react";
import "./ContactTwo.css";
import { Link } from "react-router-dom";

const ContactTwo = () => {
  return (
    <section className="contact-two">
      <div className="cta-content-wrapper">
        <h2 className="cta-title">Ready to start your next project?</h2>
        <p className="cta-description">
          Let's build something exceptional together. Whether you have a specific idea in mind or need a technical partner to bring your vision to life, I'm just a click away!
        </p>
        <Link to="/contact" className="cta-button">
          Hire Me <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default ContactTwo;
