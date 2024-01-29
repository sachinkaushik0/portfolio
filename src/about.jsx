/* =======================================
   File: about.jsx
   Student: Sachin Kaushik
   StudentID: 301379467
   Date: 27-01-2024
======================================= */

import React from 'react';
import { Link } from 'react-router-dom';
import '../src/about.css';
import BBG from '../src/assets/photo.jpg';

/* ============================
   Section: JavaScript Functions
============================ */
export default function About() {
  const resumeLink = 'https://drive.google.com/file/d/17tZHQo1FWOEr8fYHu9Squ1HSzZZ3sWHv/view?usp=sharing';

  /* =======================
       HTML Structure
      ======================= */
  return (
    <section id="about">
      <div className="aboutContent">
        <img src={BBG} alt="Sachin Kaushik" className="profileImage" />
        <div className="aboutText">
          <h2>Sachin Kaushik</h2>
          <p>
            I am a passionate web designer with a strong background in creating visually appealing and user-friendly websites.
            I specialize in UI/UX design, web design, and app design. My skills include HTML, CSS, JavaScript, and proficiency
            in design software such as Adobe Photoshop and Illustrator.
          </p>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="hireMeButton">Download Resume</a>
        </div>
      </div>
    </section>
  );
}
