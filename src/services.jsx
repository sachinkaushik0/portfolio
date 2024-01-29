/* =======================================
   File: services.jsx
   Student: Sachin Kaushik
   StudentID: 301379467
   Date: 27-01-2024
======================================= */
import React from 'react';
import '../src/index.css';
import '../src/services.css';

import service1Image from '../src/assets/service1.png';
import service2Image from '../src/assets/service2.png';
import service3Image from '../src/assets/service3.png';

export default function Services() {
  // =============================
  // Section: Data and Variables
  // =============================
  const services = [
    {
      id: 1,
      title: 'Resume Building',
      image: service1Image,
      description: 'We offer help with Resume service tailored to your specific job roles.',
    },
    {
      id: 2,
      title: 'Web Development',
      image: service2Image,
      description: 'Create stunning and responsive websites to enhance your online presence.',
    },
    {
      id: 3,
      title: 'Mobile Apps Development',
      image: service3Image,
      description: 'Develop mobile applications that bring your ideas to life on smartphones.',
    },
  ];

  // ============================
  // Section: JSX Structure
  // ============================

  return (
    <section id="serviceSection">
      <h2 className="serviceTitle">Our Services</h2>
      <span className="serviceDesc">
        Services we offer
        <div style={{ marginBottom: '80px' }} />
      </span>
      <div className="serviceList">
        {services.map((service) => (
          <div key={service.id} className="serviceItem">
            <img src={service.image} alt={service.title} className="serviceImg" />
            <div className="serviceDetails">
              <span className="serviceHeading">{service.title}</span>
              <p className="serviceDescription">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: '40px' }} />
      <button className="Btn">Contact Now</button>
      <div style={{ marginBottom: '80px' }} />
    </section>
  );
}
