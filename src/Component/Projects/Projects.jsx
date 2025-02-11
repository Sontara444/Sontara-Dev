import React, { useState } from "react";
import "./Projects.css";
import { assets } from "../Assets/assets";

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
              <img src={assets.shopper1_img} alt="sample49" />
              <figcaption>
                <h2>
                  E-Commerce-Website <span>Shopper</span>
                </h2>
                <p>Digital marketplace: buy, sell, connect globally online.</p>
              </figcaption>
              <a
                href="https://shopping-mania-one.vercel.app/"
                target="blank"
              ></a>
            </figure>

            <figure className="snip1084 red">
              <img src={assets.ticket_booking_img} alt="sample43" />
              <figcaption>
                <h2>
                  movie ticket booking <span>App</span>
                </h2>
                <p>
                  A seamless and user-friendly ticket reservation platform built
                  with JavaScript for effortless booking.
                </p>
              </figcaption>
              <a
                href="https://movie-ticket-booking-app01.netlify.app/"
                target="blank"
              >
                hello
              </a>
            </figure>

            <figure className="snip1084 blue ">
              <img src={assets.weather_img} alt="" />
              <figcaption>
                <h2>
                  Weather <span>App</span>
                </h2>
                <p>
                  A weather app tells you what the weather will be like. Made to
                  be simple, so anyone can use it.
                </p>
              </figcaption>
              <a href="https://my-app-weather22.netlify.app/" target="blank">
                hello
              </a>
            </figure>

            <figure className="snip1084 green">
              <img src={assets.ageCalculator_img} alt="sample49" />
              <figcaption>
                <h2>
                  Age<span> Calculator</span>
                </h2>
                <p>
                  An age calculator is a program that determines a person's age
                  by calculating the difference between their birth date and the
                  current date.
                </p>
              </figcaption>
              <a href="https://age-calcy-11.netlify.app/" target="blank">
                hello
              </a>
            </figure>

            <figure className="snip1084 purple">
              <img src={assets.food_img} alt="sample49" />
              <figcaption>
                <h2>food website</h2>
                <p>food website.</p>
              </figcaption>
              <a href="https://sr-project2.netlify.app/" target="_blank">
                hello
              </a>
            </figure>

            <figure className="snip1084 seagreen">
              <img src={assets.todo_img} />
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
              <a href="https://set-task-list.netlify.app/" target="_blank"></a>
            </figure>
          </div>
        </div>
        <div className="explore-buttons">
          <label htmlFor="btnBox" className="btn-area" onClick={handleDisplay}>
            {showMore ? "See Less" : "Explore More"}
          </label>
        </div>
      </div>
    </>
  );
};

export default Projects;
