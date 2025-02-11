import React, { useState } from "react";
import "./Projects.css";
import hand_img from "../Assets/e-com-image.png";
import ageCalcy from "../Assets/age-calcy.png"
import todoImg from "../Assets/todo-img.png"
import weatherImg from "../Assets/weather-img.png"
import foodWebsite from "../Assets/foodwebsite.png"
import zayWebsite from "../Assets/zaywebsite.png"
import whiteCalcy from "../Assets/whiteCalcy.png"



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
                src={hand_img}
                alt="sample49"
              />
              <figcaption>
                <h2>
                  E-Commerce-Website <span>Shopper</span>
                </h2>
                <p>Digital marketplace: buy, sell, connect globally online.</p>
              </figcaption>
              <a href="https://shopping-mania-one.vercel.app/">GO TO</a>
            </figure>

            <figure className="snip1084 red">
              <img
                src="https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/7-768x511.jpg"
                alt="sample43"
              />
              <figcaption>
                <h2>
                  App <span>Huston</span>
                </h2>
                <p></p>
              </figcaption>
              <a href="//">-</a>
            </figure>

            <figure className="snip1084 blue ">
              <img
                src={weatherImg}
                alt="weatherImg"
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
              <a href="https://my-app-weather22.netlify.app/">-</a>
            </figure>

            <figure className="snip1084 green">
             
              <img src={ageCalcy} alt="ageCalcy" />
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
              <a href="https://age-calcy-11.netlify.app/">-</a>
            </figure>

            <figure className="snip1084 purple">
              <img
                src={foodWebsite}
                alt="foodWebsite"
              />
              <figcaption>
                <h2>
                  food website <span>Locke</span>
                </h2>
                <p>food website.</p>
              </figcaption>
              <a href="https://sr-project2.netlify.app/">-</a>
            </figure>

            <figure className="snip1084 seagreen">
              <img src={todoImg}alt="todoImg" />
              
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
              
              <a href="https://set-task-list.netlify.app/">-</a>
            </figure>
            <figure className="snip1084 seagreen">
              <img src={zayWebsite}alt="zayWebsite" />
              
              <figcaption>
                <h2>
                  To-Do <span>List</span>
                </h2>
                <p>
                  
                </p>
              </figcaption>
              
              <a href="https://set-task-list.netlify.app/">-</a>
            </figure>
            <figure className="snip1084 seagreen">
              <img src={whiteCalcy}alt="whiteCalcy" />
              
              <figcaption>
                <h2>
                  Calculator <span></span>
                </h2>
                <p>
                  
                </p>
              </figcaption>
              
              <a href="https://set-task-list.netlify.app/">-</a>
            </figure>
            <figure className="snip1084 seagreen">
              <img src={zayWebsite}alt="zayWebsite" />
              
              <figcaption>
                <h2>
                  To-Do <span>List</span>
                </h2>
                <p>
                  
                </p>
              </figcaption>
              
              <a href="https://set-task-list.netlify.app/">_</a>
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






