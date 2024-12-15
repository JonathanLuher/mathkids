import React from 'react';
import logo from './images/logo_icon.png'; // Asegúrate de que la ruta del logo sea correcta
import 'bulma/css/bulma.min.css';

function TeacherForm() {
  return (
    <div className="has-background-white">
      <div className="container" >
        <br /> <br/>
        <div className="card has-background-white">
            <div className="card-content">
            <form>
              {/* Imagen del logo */}
              <div className="has-text-centered">
                <img src={logo} alt="Logo" width="150" height="150" />
              </div>
              <h1 className="title has-text-centered has-text-dark">Registro de Maestro</h1>
              <br/>

              {/* Campo para el nombre(s) */}
              <div className="field">
                <label className="label has-text-dark">Nombre(s)</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    placeholder="Ingresa tu nombre(s)" 
                    style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                  />
                </div>
              </div>

              {/* Apellido paterno */}
              <div className="field">
                <label className="label has-text-dark">Apellido paterno</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    placeholder="Ingresa tu apellido paterno" 
                    style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                  />
                </div>
              </div>

              {/* Apellido materno */}
              <div className="field">
                <label className="label has-text-dark">Apellido materno</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    placeholder="Ingresa tu apellido materno" 
                    style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                  />
                </div>
              </div>

              {/* Edad */}
              <div className="field">
                <label className="label has-text-dark">Edad</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="number" 
                    placeholder="Ingresa tu edad" 
                    style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                  />
                </div>
              </div>

              {/* Matrícula de maestro */}
              <div className="field">
                <label className="label has-text-dark">Matrícula de maestro</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    placeholder="Ingresa tu matrícula de maestro" 
                    style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                  />
                </div>
              </div>

              {/* Grado */}
              <div className="field">
                <label className="label has-text-dark">Grado</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    placeholder="Ingresa el grado que impartes" 
                    style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                  />
                </div>
              </div>

              {/* Grupo */}
              <div className="field">
                <label className="label has-text-dark">Grupo</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="text" 
                    placeholder="Ingresa el grupo que impartes" 
                    style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                  />
                </div>
              </div>

              {/* Correo electrónico */}
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

              {/* Contraseña */}
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

              {/* Confirmar contraseña */}
              <div className="field">
                <label className="label has-text-dark">Confirmar contraseña</label>
                <div className="control">
                  <input 
                    className="input" 
                    type="password" 
                    placeholder="Confirma tu contraseña" 
                    style={{ backgroundColor: '#f5f5f5', color: '#333' }}
                  />
                </div>
              </div>

              {/* Botón para registrar */}
              <div className="field">
                <div className="control">
                  <button className="button is-primary is-fullwidth">Registrar</button>
                </div>
              </div>
            </form>
            </div>
          </div>
      </div>
      <br /> <br/>
    </div>
  );
}

export default TeacherForm;
