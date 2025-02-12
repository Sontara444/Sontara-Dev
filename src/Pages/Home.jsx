import React from "react";
import Hero from "../Component/Hero/Hero";
import Projects from "../Component/Projects/Projects";
import Contact from "../Component/Contact/Contact";
import ContactTwo from "../Component/ContactTwo/ContactTwo";


const Home = () => {
  return (
    <div>
      <Hero />
      <Projects/>
      <ContactTwo/>
      <Contact/>
    </div>
  );
};

export default Home;
