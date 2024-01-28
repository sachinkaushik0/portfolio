/* =======================================
   File: layout.jsx
   Student: Sachin Kaushik
   StudentID: 301379467
   Date: 27-01-2024
======================================= */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.jpeg';
import '../src/layout.css';

export default function Layout() {
  return (
    <>
      <div className="header">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" width="90px" height="90px" />
        </Link>
        <Link to="/" className="header-link">
          <h1>Sachin Kaushik</h1>
        </Link>
      </div>

      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/project" className="nav-link">Project</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>

      <hr />
    </>
  );
}
