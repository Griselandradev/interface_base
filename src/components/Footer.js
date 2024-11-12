// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contacto: <a href="tel:+573216436377" aria-label="Call 3216436377">3216436377</a></p>
        <p>Dirección: Calle 99 Sur # 56-35. Barrio La Tablaza, La Estrella, Antioquia.</p>
        <p>Correo: <a href="mailto:info@fibrasyfiguras.com" aria-label="Email info@fibrasyfiguras.com">info@fibrasyfiguras.com</a></p>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fibras y Figuras. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;