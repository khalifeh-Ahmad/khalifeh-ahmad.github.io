import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
//import Projects from "./components/Projects/Projects";
//import Testimonials from "./components/Testimonials/Testimonials";
import './styles/animations.css';

function App() {
  return (
    <div className="App preload">
      <LoadingScreen />
      <Header />
      <Hero />
      <About />
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
