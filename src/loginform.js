import React, { useState } from 'react';
import logo from './images/logo_icon.png';
import { Link } from 'react-router-dom';
import "./index.css";

function LoginForm() {
  // Estado para manejar la visibilidad de la contraseña
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
          {/* Contenedor del formulario con estilos de contorno y sombra */}
          <div className="card has-background-white">
            <div className="card-content">
              <form>
                {/* Imagen del logo */}
                <div className="has-text-centered">
                  <img src={logo} alt="Logo" width="150" height="150" />
                </div>
                <h1 className="title has-text-dark has-text-centered">Inicio de sesión</h1>
                <br />

                {/* Campo para el nombre de usuario */}
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

                {/* Campo para la contraseña */}
                <div className="field">
                  <label className="label has-text-dark">Contraseña</label>
                  <div className="control">
                    <div className="input-container">
                      <input
                        className="input"
                        type={passwordVisible ? "text" : "password"} // Muestra u oculta la contraseña
                        placeholder="Ingresa tu contraseña"
                        style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                      />
                      <span
                        className="icon is-small is-right"
                        onClick={togglePasswordVisibility} // Al hacer clic, cambia la visibilidad
                        style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
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

                {/* Enlace para restablecer la contraseña y botón de inicio de sesión */}
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
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
}

export default LoginForm;
