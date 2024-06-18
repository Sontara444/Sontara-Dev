import React from "react";
import Hero from "../Component/Hero/Hero";
import Services from "../Component/Services/Services";
import Projects from "../Component/Projects/Projects";
// import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";
import ContactTwo from "../Component/ContactTwo/ContactTwo";
// import Example from "../Component/Example/Example";


const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Example/> */}
      <Services/>
      <Projects/>
      {/* <About/> */}
      <ContactTwo/>
      <Contact/>
    </div>
  );
};

export default Home;
