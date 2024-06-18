import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h2>Sontara.dev</h2>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "line line1 open" : "line line1"}></div>
          <div className={isOpen ? "line line2 open" : "line line2"}></div>
          <div className={isOpen ? "line line3 open" : "line line3"}></div>
        </div>
        <ul className={isOpen ? "nav-items open" : "nav-items"}>
          <li
            onClick={() => {
              setMenu("home");
              setIsOpen(false);
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
            {menu === "home" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("about");
              setIsOpen(false);
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              About
            </Link>
            {menu === "about" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("projects");
              setIsOpen(false);
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/projects"
            >
              Projects
            </Link>
            {menu === "projects" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("contact");
              setIsOpen(false);
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              Contact
            </Link>
            {menu === "contact" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
