import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav-menu">
          <Link to="/">Inicio</Link>
          <Link to="/services">Servicios</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/about">Nuestra Empresa</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
