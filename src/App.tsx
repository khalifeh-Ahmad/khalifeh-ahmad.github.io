import React from "react";
import "./App.css";
import Header from "./components/Sections/Header/Header";
import Hero from "./components/Sections/Hero/Hero";
import About from "./components/Sections/About/About";
import Experience from "./components/Sections/Experience/Experience";
import Education from "./components/Sections/Education/Education";
import Skills from "./components/Sections/Skills/Skills";
import Contact from "./components/Sections/Contact/Contact";
import Footer from "./components/Sections/Footer/Footer";
import ThemeSwitcher from "./components/Features/ThemeSwitcher/ThemeSwitcher";
import LoadingScreen from "./components/Features/LoadingScreen/LoadingScreen";
//import Projects from "./components/Sections/Projects/Projects";
//import Testimonials from "./components/Sections/Testimonials/Testimonials";
import './styles/animations.css';
import Timeline from "./components/Features/Timeline/Timeline";

function App() {
  return (
    <div className="App preload">
      <LoadingScreen />
      <Header />
      <Hero />
      <About />
      <Timeline /> 
      <Experience />
      <Education />
      <Skills />
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
