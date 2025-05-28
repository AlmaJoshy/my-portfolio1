import React from 'react';

function Resume() {
  return (
    <section id="resume">
      <div
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          color: "#263238",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
            borderBottom: "2px solid #00acc1",
            paddingBottom: "0.5rem",
            color: "#263238",
          }}
        >
          Resume
        </h2>
        <p style={{ fontSize: "1rem", color: "#212121" }}>
          You can{" "}
          <a
            href="https://github.com/AlmaJoshy/my-portfolio1/blob/main/public/resume_alma.pdf"
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
