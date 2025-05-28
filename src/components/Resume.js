import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <div
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          color: "#263238",              // charcoal text
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
            borderBottom: "2px solid #00acc1",  // sky blue border
            paddingBottom: "0.5rem",
            color: "#263238",                     // charcoal text
          }}
        >
          Resume
        </h2>
        <p style={{ fontSize: "1rem", color: "#212121" }}>
          You can{" "}
          <a
            href="your-resume-link.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00acc1", textDecoration: "none" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            view or download my resume here
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Resume;
