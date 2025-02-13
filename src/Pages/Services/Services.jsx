import React from "react";
import "./Services.css";
import {assets} from '../../Component/Assets/assets'

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <h2 className="services-subtitle">MY SERVICES</h2>
        <h1 className="services-title">Here Are Some of My Skills</h1>

        <div className="services-list">
          <div className="service-category">
            <h3>1 - GRAPHIC DESIGN</h3>
            <ul>
              <li>UI Design</li>
              <li>Website & Digital Design</li>
              <li>Branding & Visual Identity</li>
              <li>Print Design</li>
            </ul>
          </div>

          <div className="service-category">
            <h3>2 - ILLUSTRATION</h3>
            <ul>
              <li>Editorial</li>
              <li>Narrative</li>
              <li>Motion Graphics</li>
              <li>Animation</li>
              <li>Visual Effects</li>
            </ul>
          </div>

          <div className="service-category">
            <h3>3 - FRONT END DEVELOPMENT</h3>
            <ul>
              <li>HTML / CSS</li>
              <li>JS & jQuery Startup</li>
              <li>WordPress</li>
              <li>Joomla</li>
            </ul>
          </div>

          <div className="service-category">
            <h3>4 - WEB MARKETING</h3>
            <ul>
              <li>Sales Marketing</li>
              <li>Invoice</li>
              <li>eCommerce</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="services-image">
        <img src={assets.serviceImage} alt="Services" />
      </div>
    </div>
  );
};

export default Services;
