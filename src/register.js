import React from 'react';
import logo from './images/logo_icon.png';
import 'bulma/css/bulma.min.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación

function RegisterForm() {
  const navigate = useNavigate(); // Hook para la navegación

  const handleUserType = (type) => {
    // Función para manejar la selección del tipo de usuario
    navigate(`/${type}`); // Redirige a la ruta correspondiente según el tipo de usuario
  };

  return (
    <div className="has-background-white">
      <br /><br />
      <div className='container'>
      <div className="card has-background-white">
        <div className="column is-half is-offset-one-quarter">
          <div className="form-container">
            {/* Imagen del logo */}
            <div className="has-text-centered">
              <img src={logo} alt="Logo" width="150" height="150" />
            </div>
            <h1 className="title has-text-centered has-text-dark">Elige su tipo de usuario</h1>
            <br />
            {/* Contenedor para los botones */}
            <div className="field">
              <div className="control">
                <div className="columns">
                  <div className="column is-half">
                    {/* Botón para "Maestro" */}
                    <button 
                      className="button is-primary is-fullwidth" 
                      onClick={() => handleUserType('register/maestro')} // Redirige a la ruta de maestro
                    >
                      Maestro
                    </button>
                  </div>
                  <div className="column is-half">
                    {/* Botón para "Alumno" */}
                    <button 
                      className="button is-primary is-fullwidth" 
                      onClick={() => handleUserType('register/alumno')} // Redirige a la ruta de alumno
                    >
                      Alumno
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
      </div>
      </div>
      <br /><br />
    </div>
  );
}

export default RegisterForm;
