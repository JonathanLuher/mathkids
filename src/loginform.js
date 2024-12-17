import React, { useState } from 'react';
import logo from './images/logo_icon.png';
import { Link } from 'react-router-dom';
import floatingImage1 from './images/floating_image1.png';
import floatingImage2 from './images/floating_image2.png';
import './index.css';
import './login.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login exitoso:', data);
      } else {
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
      <div className="has-background-white">
        <br />
        <div className="container">
          <div className="column is-half is-offset-one-quarter">
            <div className="card has-background-white floating-card">
              <div className="card-content">
                <form onSubmit={handleSubmit}>
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
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label has-text-dark">Contraseña</label>
                    <div className="control">
                      <div className="input-container">
                        <input
                            className="input"
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Ingresa tu contraseña"
                            style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="icon is-small is-right"
                            onClick={togglePasswordVisibility}
                            aria-label={passwordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                            style={{
                              cursor: 'pointer',
                              position: 'absolute',
                              right: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                            }}
                        >
                        <i className="material-icons">
                          {passwordVisible ? 'visibility' : 'visibility_off'}
                        </i>
                      </span>
                      </div>
                    </div>
                  </div>
                  {!password && errorMessage && (
                      <p className="help is-danger">Por favor, completa los campos correspondientes.</p>
                  )}

                  <br />
                  <div className="field is-flex is-justify-content-space-between is-align-items-center">
                    <div className="control">
                      <Link to="/reset-password" className="has-text-grey">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <div className="control">
                      <button className="button is-primary is-fullwidth" type="submit">Iniciar sesión</button>
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
