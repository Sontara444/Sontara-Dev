import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const handleDisplay = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="project">
        <p className="project-para">My Portfolio</p>
        <h3 className="project-head">Recent Works</h3>
        <div className="project-wrapper">
          <div className="project-container explore-area">
            <input type="checkbox" id="btnBox" />
            <figure className="snip1084 yellow">
              
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample49.jpg"
                alt="sample49"
              />
              <figcaption>
                <h2>
                  E-Commerce-Website <span>Shopper</span>
                </h2>
                <p>Digital marketplace: buy, sell, connect globally online.</p>
              </figcaption>
              <a href="https://shopping-mania-one.vercel.app/"></a>
            </figure>

            <figure className="snip1084 red">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample43.jpg"
                alt="sample43"
              />
              <figcaption>
                <h2>
                  App <span>Huston</span>
                </h2>
                <p></p>
              </figcaption>
              <a href="//"></a>
            </figure>

            <figure className="snip1084 blue ">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample51.jpg"
                alt=""
              />
              <figcaption>
                <h2>
                  Weather-App <span>Lawler</span>
                </h2>
                <p>
                  A weather app tells you what the weather will be like. Made to
                  be simple, so anyone can use it.
                </p>
              </figcaption>
              <a href="https://my-app-weather22.netlify.app/">hello</a>
            </figure>

            <figure className="snip1084 green">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample49.jpg"
                alt="sample49"
              />
              <figcaption>
                <h2>
                  Age-calcy <span>Locke</span>
                </h2>
                <p>
                  An age calculator is a program that determines a person's age
                  by calculating the difference between their birth date and the
                  current date.
                </p>
              </figcaption>
              <a href="https://age-calcy-11.netlify.app/">hello</a>
            </figure>

            <figure className="snip1084 purple">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample49.jpg"
                alt="sample49"
              />
              <figcaption>
                <h2>
                  food website <span>Locke</span>
                </h2>
                <p>food website.</p>
              </figcaption>
              <a href="https://sr-project2.netlify.app/">hello</a>
            </figure>

            <figure className="snip1084 seagreen">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample49.jpg"
                alt="sample49"
              />
              <figcaption>
                <h2>
                  To-Do <span>List</span>
                </h2>
                <p>
                  A to-do list is a simple tool used to organize tasks or
                  activities that need to be completed, typically written down
                  in a list format.
                </p>
              </figcaption>
              <a href="https://set-task-list.netlify.app/">hello</a>
            </figure>
          </div>
        </div>
        <div className="explore-buttons">
          <label htmlFor="btnBox" className="btn-area" onClick={handleDisplay}>
            {showMore ? "Load Less" : "Explore More"}
          </label>
        </div>
      </div>
    </>
  );
};

export default Projects;






