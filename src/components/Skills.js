import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          borderBottom: "2px solid #00acc1", // sky blue border
          paddingBottom: "0.5rem",
          color: "#263238", // charcoal text
        }}
      >
        Skills
      </h2>

      <div
        style={{
          backgroundColor: "#f5f5f5", // light gray background
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 2px 8px rgba(38, 50, 56, 0.1)", // subtle charcoal shadow
        }}
      >
        <ul style={{ listStyleType: "square", color: "#212121", paddingLeft: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Languages:</strong> Python, Java, C, JavaScript
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Frontend:</strong> HTML, CSS, React
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Backend:</strong> FastAPI, SQLite
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Tools & Platforms:</strong> Git, VS Code, GitHub, Google Cloud
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Other:</strong> Machine Learning, Project Management
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
