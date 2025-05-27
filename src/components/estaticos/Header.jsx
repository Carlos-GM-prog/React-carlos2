import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styleEstatico.css';
import Cart from '../Cart';

const Header = ({ cartItems }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/" className="link">Inicio</Link></li>
          <li><Link to="/acerca-de" className="link">Sobre nosotros</Link></li>
          <li><Link to="/productos" className="link">Galería de productos</Link></li>
          <li><Link to="/contacto" className="link">Contacto</Link></li>
          <li className="carrito">
            <button className="btn-cart" onClick={() => setCartOpen(true)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Cart
              cartItems={cartItems}
              isOpen={isCartOpen}
              onClose={() => setCartOpen(false)}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
