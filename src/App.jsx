import React from 'react';
import './App.css'
import NavBar from './components/Nav.jsx';
import HeroSection from './components/heroSection';
import ParticlesBG from './components/ParticlesBG.jsx';
import AboutSection from './components/AboutSection.jsx';

function App() {
  return (
        <>
          <NavBar />
          <HeroSection />   
          <AboutSection />
        </>
  )
}

export default App
