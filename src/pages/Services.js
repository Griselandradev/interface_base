import React, { useState } from 'react';
import './Services.css';
import ProductModal from '../components/ProductModal';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import discoImage from '../assets/images/disco.png';
import tanquImage from '../assets/images/tanqu.png';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    price: 100,
    imageUrl: discoImage, 
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 150,
    imageUrl: tanquImage, // Referencia a la imagen importada
  },
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

      <Footer />
    </div>
  );
}

export default Services;
