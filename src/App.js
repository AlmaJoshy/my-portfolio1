import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contacts';

function App() {
  return (
    <div>
      <nav>
        <a href="#home">Home</a> | 
        <a href="#projects">Projects</a> | 
        <a href="#skills">Skills</a> | 
        <a href="#resume">Resume</a> | 
        <a href="#contact">Contact</a>
      </nav>

      <div id="home"><Home /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="resume"><Resume /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
