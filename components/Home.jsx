/* =======================================
   File: home.jsx
   Student: Sachin Kaushik
   StudentID: 301379467
   Date: 27-01-2024
======================================= */
import React from 'react';
import { Link } from 'react-router-dom';
import '../src/home.css';

export default function Home() {
  return (
    <section id="home">
      <div className="overlay"></div>
      <div className="content">
        <div className="welcome">
          <h1>Welcome to Sachin Kaushik's Portfolio</h1>
          <p>Explore my work and discover the passion behind each project.</p>
        </div>

        <div className="cta">
          <p>Ready to learn more about me?</p>
          <Link to="/about" className="cta-button">About Me</Link>
        </div>

        <div className="mission">
          <h2>Mission Statement</h2>
          <p>To deliver creative and innovative solutions that exceed expectations, leaving a lasting impact on every project.</p>
        </div>
      </div>
    </section>
  );
}
