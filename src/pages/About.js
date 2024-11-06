import React from 'react';
import './About.css'; 
import Header from '../components/Header'; 

function About() {
  return (
    <div>
      <Header /> {}
      <div className="about-container">
        <img src="/path/to/your/image.jpg" alt="About Us" /> {}
        <h1>About Us</h1>
        <p>Welcome to our website! We are a company based in Medellín, Colombia. We strive to provide the best service to our clients. Our team is dedicated to innovation and delivering quality solutions. Thank you for visiting our site!</p>
        <p><strong>Location:</strong> Medellín, Colombia</p>
        <p><strong>Year:</strong> 2024</p>
      </div>
    </div>
  );
}

export default About;
