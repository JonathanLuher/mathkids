import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo_icon.png'; // Asegúrate de que la ruta del logo sea correcta
import './MainNav.css';


function MainNav() {
  // Estado para manejar el estado del menú en dispositivos móviles
  const [isActive, setIsActive] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} alt="Logo" width="112" height="28" />
          </Link>
          <button
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/register" className="button is-primary">Registro</Link>
                <Link to="/login" className="button is-light">Iniciar sesión</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
