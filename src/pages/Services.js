import React, { useState } from 'react';
import './Services.css';
import ProductModal from '../components/ProductModal';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta sea correcta

const products = [
  {
    id: 1,
    name: 'Producto 1',
    price: 100,
    imageUrl: 'ruta/a/tu/imagen1.jpg', // Cambia esto a la ruta de tu imagen
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 150,
    imageUrl: 'ruta/a/tu/imagen2.jpg',
  },
  // Agrega más productos según sea necesario
];

function Services() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    if (cart.length < 10) {
      setCart([...cart, product]);
    } else {
      alert('No puedes agregar más de 10 productos al carrito');
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="services-container">
      <Header /> 
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              onClick={() => openModal(product)}
            />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}

      <Footer /> {/* Incluye el Footer aquí */}
    </div>
  );
}

export default Services;