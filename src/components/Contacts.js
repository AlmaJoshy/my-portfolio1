import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          borderBottom: "2px solid #00acc1",  // sky blue border
          paddingBottom: "0.5rem",
          color: "#263238",                    // charcoal dark gray text
        }}
      >
        Contact
      </h2>

      <div
        style={{
          backgroundColor: "#f5f5f5",          // light gray background
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 2px 8px rgba(0, 172, 193, 0.2)", // subtle sky blue shadow
          lineHeight: "1.8",
        }}
      >
        <p>
          I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me via email or connect with me on LinkedIn.
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:almagace171@gmail.com"
            style={{ color: "#00acc1", textDecoration: "none" }} // sky blue link
          >
            almagace171@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="http://linkedin.com/in/alma-gace-joshy-606308269e"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00acc1", textDecoration: "none" }} // sky blue link
          >
            AlmaGaceJoshy
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
