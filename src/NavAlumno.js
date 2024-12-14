import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación entre rutas
import './VistaAlumno.css';  // Asegúrate de tener este archivo para los estilos

function NavAlumno() {
  return (
    <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/alumno" className="navbar-item">
        <span className="material-icons black-icon">home</span>
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/avances" className="button is-light">
                Avances {/* Enlace a la página de avances */}
              </Link>
              <Link to="/login" className="button is-succes">
                Cerrar sesión {/* Enlace para cerrar sesión */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavAlumno;
