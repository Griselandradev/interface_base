import React from 'react';
import './ProductModal.css'; // Asegúrate de tener este archivo CSS

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} />
        <p>Precio: ${product.price}</p>
        <button onClick={() => { /* Lógica para agregar al carrito */ }}>Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default ProductModal;