import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    setSubmitted(true);
    setError(null);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <Header />
      <p></p>
      <div className="contact-content">
        {/* Mapa */}
        <div className="map-container">
          <iframe
            title="Ubicación de la Empresa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6644564762174!2d-75.6637509852386!3d6.144681295558558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46828727b16b4b%3A0x1003a0d8e6ff6cf1!2sCalle%2099%20Sur%20%2356-35%2C%20La%20Estrella%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        
        {/* Formulario de contacto */}
        <div className="contact-form">
          {submitted && <p className="success-msg">¡Gracias por tu mensaje!</p>}
          {error && <p className="error-msg">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje"
                className="input-field"
              />
            </div>
            <button type="submit" className="submit-btn">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
