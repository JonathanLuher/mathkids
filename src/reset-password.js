import React from 'react';
import logo from './images/logo_icon.png';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import "./index.css";

function ResetPasswordForm() {

  return (
    <div className="has-background-white">
      <div className="container">
        <div className="column is-half is-offset-one-quarter">
          {/* Card Wrapper */}
          <div className="card has-background-white">
            <div className="card-content">
              {/* Imagen del logo */}
              <div className="has-text-centered">
                <img src={logo} alt="Logo" width="150" height="150" />
              </div>
              <h1 className="title has-text-centered has-text-dark">Restablecer Contraseña</h1>
              <br/>

              <form>
                {/* Campo para el nombre de usuario o correo electrónico */}
                <div className="field">
                  <label className="label has-text-dark">Correo electrónico</label>
                  <div className="control">
                    <input 
                      className="input" 
                      type="email" 
                      placeholder="Ingresa tu correo electrónico" 
                      style={{ backgroundColor: '#f5f5f5', color: '#333' }} 
                    />
                  </div>
                </div>

                {/* Contenedor para los botones */}
                <div className="field">
                  <div className="control">
                    <div className="columns is-vcentered">
                      <div className="column is-half has-text-left" style={{ marginTop: '10px' }}>
                        {/* Enlace "Volver" */}
                        <Link to="/Login" className="has-text-grey">Volver</Link>
                      </div>
                      <div className="column is-half has-text-centered">
                        {/* Botón "Enviar" */}
                        <button className="button is-primary is-fullwidth">Enviar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
