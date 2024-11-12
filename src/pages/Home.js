import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';
import imagenTanques from '../assets/images/imagen_tanques.png'; // Verifica la ruta
import imagenDuctos from '../assets/images/imagen_ductos.png'; // Verifica la ruta
import imagenMedida from '../assets/images/imagen_medida.png'; // Verifica la ruta

const categories = [
  {
    id: 1,
    name: 'Tanques',
    description: 'Tanques de alta calidad para almacenamiento de agua y otros líquidos.',
    imageUrl: imagenTanques,
  },
  {
    id: 2,
    name: 'Ductos para basura',
    description: 'Sistemas de ductos para manejo eficiente de desechos.',
    imageUrl: imagenDuctos,
  },
  {
    id: 3,
    name: 'Productos a medida',
    description: 'Diseñamos y fabricamos productos personalizados a tus necesidades.',
    imageUrl: imagenMedida,
  },
];

function Home() {
  return (
    <div className="home-container">
      <Header /> 
      <p>Categorías de productos:</p>
      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img
              src={category.imageUrl}
              alt={category.name}
              className="category-image"
            />
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <button className="explore-button">Explorar {category.name}</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;