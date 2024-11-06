import React from 'react';
import './About.css'; 
import Header from '../components/Header'; 

function About() {
  return (
    <div>
      <Header /> {}
      <div className="about-container">
        <h1>About Us</h1>
        <p>YA MEJORO</p>
        <p><strong>Location:</strong> Medellín, Colombia</p>
        <p><strong>Year:</strong> 2024</p>
      </div>
    </div>
  );
}

export default About;
