import "./App.css";
import { useState, useRef, useEffect } from "react";
import NavBar from "./components/navigationBar/navBar.jsx";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/aboutSection/aboutSection.jsx";
import ProjectSection from "./components/projectsSection/projectSection.jsx";
import EmailSection from "./components/emailSection.jsx";
import Footer from "./components/footer.jsx";
import { useTranslation } from "react-i18next";


function App() {
  const { i18n } = useTranslation("global");
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

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
      <div className="heroBG z-0" src ={"./images/hero.jpg"}>
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
