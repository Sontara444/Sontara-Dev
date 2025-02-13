import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Projects from "./Component/Projects/Projects";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <Main>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
        <Footer />
      </Main>
    </div>
  );
}

export default App;
