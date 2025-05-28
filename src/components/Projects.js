import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          borderBottom: "2px solid #00acc1",  // sky blue border
          paddingBottom: "0.5rem",
          color: "#263238",                   // charcoal dark gray text
        }}
      >
        Projects
      </h2>

      {/* Project 1 */}
      <div
        style={{
          backgroundColor: "#f5f5f5",         // light gray background
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "1rem",
          boxShadow: "0 2px 8px rgba(0, 172, 193, 0.1)", // subtle sky blue shadow
        }}
      >
        <h3 style={{ marginTop: 0, color: "#263238" }}>{`Project 1 Title`}</h3>
        <p style={{ color: "#212121" }}>{`Short description for project 1.`}</p>
        <a
          href="https://github.com/yourproject1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00acc1", textDecoration: "none" }}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >
          View on GitHub
        </a>
      </div>

      {/* Project 2 */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "1rem",
          boxShadow: "0 2px 8px rgba(0, 172, 193, 0.1)",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#263238" }}>{`Project 2 Title`}</h3>
        <p style={{ color: "#212121" }}>{`Short description for project 2.`}</p>
        <a
          href="https://github.com/yourproject2"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00acc1", textDecoration: "none" }}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
