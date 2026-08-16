import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

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
          <li onClick={() => setIsOpen(false)}>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </Link>
            {currentPath === "/" ? <hr /> : <></>}
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              About
            </Link>
            {currentPath === "/about" ? <hr /> : <></>}
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/projects"
            >
              Projects
            </Link>
            {currentPath === "/projects" ? <hr /> : <></>}
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              Contact
            </Link>
            {currentPath === "/contact" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
