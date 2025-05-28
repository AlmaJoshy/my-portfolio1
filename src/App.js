import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contacts';

function App() {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "#263238",       // charcoal dark gray
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          fontWeight: "600",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {["home", "projects", "skills", "resume", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            style={{
              color: "#f5f5f5",              // light gray text
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00acc1")}  // sky blue hover
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f5f5")}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "2rem",
          backgroundColor: "#f5f5f5",     // light gray background
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 172, 193, 0.1)",  // subtle sky blue shadow
        }}
      >
        <header
          style={{
            backgroundColor: "#263238",   // charcoal header background
            color: "#00acc1",             // sky blue text
            padding: "1rem 2rem",
          }}
        >
          <h1
            style={{
              fontSize: "1.8rem",
              marginBottom: "1rem",
              borderBottom: "3px solid #00acc1", // sky blue underline
              paddingBottom: "0.3rem",
              fontWeight: "700",
            }}
          >
            Hi, I'm Alma Gace Joshy
          </h1>
        </header>

        <section id="home">
          <Home />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
