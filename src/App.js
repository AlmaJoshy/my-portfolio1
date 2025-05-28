import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contacts';

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#263238",       // charcoal
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
              color: "#f5f5f5",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "color 0.3s ease",
              letterSpacing: "0.5px"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00acc1")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f5f5")}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "2rem auto",
          padding: "2rem",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Header Title */}
        <header
          style={{
            backgroundColor: "#263238",
            color: "#00acc1",
            padding: "1.5rem 2rem",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              margin: 0,
              borderBottom: "2px solid #00acc1",
              paddingBottom: "0.5rem",
              fontWeight: "700",
              display: "inline-block"
            }}
          >
            Let’s Build Something Amazing Together
          </h1>
        </header>

        {/* Sections */}
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
