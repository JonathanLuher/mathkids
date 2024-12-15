import React, { useState } from 'react';
import logo from './images/logo_icon.png';
import { Link } from 'react-router-dom';
import floatingImage1 from './images/floating_image1.png';
import floatingImage2 from './images/floating_image2.png';
import './index.css';
import './login.css';

function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="has-background-white">
      <br />
      <div className="container">
        <div className="column is-half is-offset-one-quarter">
          <div className="card has-background-white floating-card">
            <div className="card-content">
              <form>
                <div className="has-text-centered">
                  <img src={logo} alt="Logo" width="150" height="150" />
                </div>
                <h1 className="title has-text-dark has-text-centered">Inicio de sesión</h1>
                <br />
                <div className="field">
                  <label className="label has-text-dark">Usuario</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Ingresa tu usuario"
                      style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                    />
                  </div>
                </div>
                <br />
                <div className="field">
                  <label className="label has-text-dark">Contraseña</label>
                  <div className="control">
                    <div className="input-container">
                      <input
                        className="input"
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Ingresa tu contraseña"
                        style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                      />
                      <span
                        className="icon is-small is-right"
                        onClick={togglePasswordVisibility}
                        style={{
                          cursor: 'pointer',
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                        }}
                      >
                        {/* Cambiar ícono según el estado de visibilidad */}
                        <i className="material-icons">
                          {passwordVisible ? 'visibility' : 'visibility_off'}
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
                <br />

                <div className="field is-flex is-justify-content-space-between is-align-items-center">
                  <div className="control">
                    <Link to="/reset-password" className="has-text-grey">¿Olvidaste tu contraseña?</Link>
                  </div>
                  <div className="control">
                    <button className="button is-primary is-fullwidth">Iniciar sesión</button>
                  </div>
                </div>
              </form>
            </div>
            <img
              src={floatingImage1}
              alt="Flotante Izquierda"
              className="floating-image left"
            />
            <img
              src={floatingImage2}
              alt="Flotante Derecha"
              className="floating-image right"
            />
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
}

export default LoginForm;
