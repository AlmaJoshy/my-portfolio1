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

      {/* Emergency Location Sender */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "1rem",
          boxShadow: "0 2px 8px rgba(0, 172, 193, 0.1)",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#263238" }}>
          Emergency Location Sender (TinkerHub Hackathon)
        </h3>
        <p style={{ color: "#212121" }}>
          A mobile-integrated system that sends the user’s real-time location to a designated emergency contact in the event of a natural disaster or emergency. Designed and implemented during a 24-hour hackathon.
        </p>
        <a
          href="https://github.com/AlmaJoshy/EmergencyAlert"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00acc1", textDecoration: "none" }}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >
          View on GitHub
        </a>
      </div>

      {/* Medical Insurance Fraud Detection */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "1rem",
          boxShadow: "0 2px 8px rgba(0, 172, 193, 0.1)",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#263238" }}>
          Medical Insurance Fraud Detection
        </h3>
        <p style={{ color: "#212121" }}>
          A full-stack web application that detects fraudulent medical insurance claims using a machine learning classifier. Built with React (frontend), FastAPI (backend), and SQLite (database), with REST APIs for real-time classification.
        </p>
        <a
          href="https://github.com/AlmaJoshy/medicalinsurance"
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
