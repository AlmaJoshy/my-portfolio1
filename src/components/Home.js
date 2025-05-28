import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Make sure Home.css exists and includes .blinking-cursor

function Home() {
  const [text, setText] = useState('');
  const fullText = `I'm a Computer Science student passionate about full-stack development and AI/ML. 
I enjoy transforming complex problems into simple, elegant, and efficient solutions. 
Whether it's developing robust backend systems or creating dynamic front-end experiences, 
I'm always excited to learn and build.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [fullText]); // ✅ Fix: Include fullText in dependency array

  return (
    <section style={{ padding: "2rem 0" }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          color: "#263238",
          fontSize: "2.5rem",
          marginBottom: "0.5rem",
          fontWeight: "700"
        }}
      >
        Hi, I'm Alma Gace Joshy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          color: "#212121",
          fontSize: "1.2rem",
          lineHeight: "1.6",
          maxWidth: "600px",
          minHeight: "7rem", // enough height for full animation
          whiteSpace: "pre-wrap" // preserve newlines in fullText
        }}
      >
        {text}
        <span className="blinking-cursor">|</span>
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#00acc1",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "500",
          transition: "background-color 0.3s ease"
        }}
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default Home;
