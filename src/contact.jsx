/* =======================================
   File: contact.jsx
   Student: Sachin Kaushik
   StudentID: 301379467
   Date: 27-01-2024
======================================= */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/contact.css';

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message!');
    
    // Redirect to home page
    navigate('/', { replace: true }); 
  };

  return (
    <div className="contactContainer">
      <div className="contactForm">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="myFName">First Name: </label>
          <input type="text" id="myFName" name="myFName" required autoFocus /> <br />

          <label htmlFor="myLName">Last Name: </label>
          <input type="text" id="myLName" name="myLName" required /> <br />

          <label htmlFor="myEmail">Email: </label>
          <input type="email" id="myEmail" name="myEmail" required /> <br />

          <label htmlFor="myPhone">Phone: </label>
          <input type="tel" id="myPhone" name="myPhone" required /> <br />

          <label htmlFor="myMessage">Message: </label>
          <textarea id="myMessage" name="myMessage" rows="4" required></textarea> <br />

          <input type="submit" className="submit" value="Submit" />
        </form>
      </div>

      <div className="contactInfo">
        <h2>Contact Information</h2>
        <p>Name: Sachin Kaushik</p>
        <p>Call: 01210213</p>
        <p>Email: bsd@bsfs.com</p>
      </div>
    </div>
  );
}