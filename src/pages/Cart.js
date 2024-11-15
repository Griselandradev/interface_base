import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Cart.css';

function Cart() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  return (
    <div className="cart-container">
      <Header cartCount={cart.length} />
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.imageUrl} alt={product.name} />
              <div className="item-details">
                <h2>{product.name}</h2>
                <p>Precio: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>El carrito está vacío.</p>
      )}
      <Footer />
    </div>
  );
}

export default Cart;
