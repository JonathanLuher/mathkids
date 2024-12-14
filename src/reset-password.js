import React from 'react';
import logo from './images/logo_icon.png';
import 'bulma/css/bulma.min.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación

function ResetPasswordForm() {
  const navigate = useNavigate(); // Hook para la navegación

  const handleBack = () => {
    navigate('/'); // Cambia a la ruta que desees al hacer clic en "Volver"
  };

  return (
    <div className="has-background-white">
      <div className="container">
        <div className="column is-half is-offset-one-quarter">
          <div className="form-container">
            <form>
              {/* Imagen del logo */}
              <div className="has-text-centered">
                <img src={logo} alt="Logo" width="150" height="150" />
              </div>
              <h1 className="title has-text-centered has-text-dark">Restablecer Contraseña</h1>
              <br/>

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
                  <div className="columns">
                    <div className="column is-half">
                      {/* Botón "Volver" */}
                      <button 
                        type="button" 
                        className="button is-light" 
                        onClick={handleBack} // Función para manejar el clic en "Volver"
                      >
                        Volver
                      </button>
                    </div>
                    <div className="column is-half">
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
  );
}

export default ResetPasswordForm;
