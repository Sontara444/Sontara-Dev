import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home";

const About = lazy(() => import("./Component/About/About"));
const Contact = lazy(() => import("./Component/Contact/Contact"));
const Projects = lazy(() => import("./Component/Projects/Projects"));

function App() {
  return (
    <div>
      <Main>
        <Navbar />
        <Suspense fallback={<div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading...</div>}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Suspense>
        <Footer />
      </Main>
    </div>
  );
}

export default App;
