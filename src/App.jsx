import { useState, useEffect } from 'react'
import './App.css'
import Navbar from '../Componenets/Navbar'
import { Routes, Route } from 'react-router-dom';
import HeroSection from '../Componenets/HeroSection';
import Featuredprojects from '../Componenets/Featuredprojects';
import CoreSkills from '../Componenets/CoreSkills';
import Contact from '../Componenets/Contact';
import Footer from '../Componenets/Footer';
import MoreProjects from '../Componenets/MoreProjects';
import Navbar2 from '../Componenets/Navbar2';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <HeroSection />
    <Featuredprojects />
    <MoreProjects />
    <CoreSkills />
    <Contact />
    <Footer />
    <Navbar2 isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default App
