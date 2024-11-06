import React, { useState } from 'react';
import { getNationality } from '../api/Api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css'; 

function Home() {
  const [name, setName] = useState('');
  const [nationalities, setNationalities] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await getNationality(name);
      setNationalities(response.data.country); 
      setError(null);
    } catch (error) {
      console.error('Error al predecir la nacionalidad:', error);
      setError('No se pudo obtener la nacionalidad. Intenta nuevamente.');
    }
  };

  return (
    <div className="home-container">
      <Header />
      <div className="search-container">
        <h1>Predicción de Nacionalidad</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe un nombre"
          className="name-input"
        />
        <button onClick={handleSearch} className="search-btn">Buscar Nacionalidad</button>
        {error && <p className="error-msg">{error}</p>}
      </div>
      <div className="results-container">
        <ul>
          {nationalities.map((nationality, index) => (
            <li key={index}>
              <strong>País:</strong> {nationality.country_id} -{' '}
              <strong>Probabilidad:</strong> {(nationality.probability * 100).toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
