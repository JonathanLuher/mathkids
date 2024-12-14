import React from 'react';
import logo from './images/logo_icon.png';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import 'bulma/css/bulma.min.css';

function LoginForm() {
  return (
    <div className="has-background-white">
      <br/>
      <div className="container">
        <div className="column is-half is-offset-one-quarter">

          {/* Contenedor del formulario con estilos de contorno y sombra */}
          <div className="form-container" style={{ border: '1px solid lightgray', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '5px' }}>
            <form>
                {/* Imagen del logo */}
                <div className="has-text-centered">
                    <img src={logo} alt="Logo" width="150" height="150" />
                </div>
                <h1 className='title has-text-dark has-text-centered'>Inicio de sesión</h1>
                <br/>

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
              <br/>

              {/* Campo para la contraseña */}
              <div className="field">
                <label className="label has-text-dark">Contraseña</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="password" 
                    placeholder="Ingresa tu contraseña" 
                    style={{ backgroundColor: '#f5f5f5', color: '#333' }} 
                  />
                </div>
              </div>
              <br/>

              {/* Enlace para restablecer la contraseña y botón de inicio de sesión */}
              <div className="field is-grouped is-grouped-right">
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
      <br/><br/>
    </div>
  );
}

export default LoginForm;
