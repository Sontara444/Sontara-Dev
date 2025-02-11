import React from "react";
import "./ContactTwo.css";

const ContactTwo = () => {
  return (
    <>
      <section className="contact-two">
        <div className="contact-two-header">
          <h2>Hire Me!</h2>
        </div>
        <div className="contact-two-container">
          <div className="contact-two-content">
            <p>
              Dreaming up a project? Let’s make it real together. Ready to chat?
              Coffee’s on me!
            </p>
          </div>
        </div>
        <div className="contact-two-button">
          <a href="/contact">CONTACT US</a>
        </div>
      </section>
    </>
  );
};

export default ContactTwo;
