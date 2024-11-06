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
      <div className="contact-form">
        <h1>Contacto</h1>
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
      <Footer />
    </div>
  );
}

export default Contact;
