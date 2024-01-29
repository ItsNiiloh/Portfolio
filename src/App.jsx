import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import NavBar from "./components/navigationBar/navBar.jsx";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/aboutSection/aboutSection.jsx";
import ProjectSection from "./components/projectsSection/projectSection.jsx";
import EmailSection from "./components/emailSection.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <NavBar isActive={isActive} setIsActive={setIsActive} ref={menuRef} />
      <div className="heroBG z-0">
        <HeroSection />
      </div>
      <div className="container mt-24 mx-auto xl:px-12 z-0">
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
