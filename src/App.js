import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './loginform.js';
import ResetPasswordForm from './reset-password.js';
import Register from './register.js';
import TeacherForm from './TeacherForm.js';
import StudentForm from './StudentForm.js';
import Footer from './Footer.js';
import VistaAlumno from './VistaAlumno.js';
import NavAlumno from './NavAlumno.js';
import MainNav from './MainNav.js';
import Nivel1 from './Nivel1.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<><MainNav/><LoginForm /><Footer/></>} />
      <Route path="/login" element={<><MainNav/><LoginForm /><Footer/></>} />
      <Route path="/register" element={<><MainNav/><Register /><Footer /></>} />
      <Route path="/register/maestro" element={<><MainNav/><TeacherForm /><Footer /></>} />
      <Route path="/register/alumno" element={<><MainNav/><StudentForm /><Footer /></>} />
      <Route path="/reset-password" element={<><MainNav/><ResetPasswordForm /><Footer /></>} />
      <Route path="/alumno" element={<><NavAlumno/><VistaAlumno/></>}/>
      <Route path="/nivel/1" element={<><NavAlumno/><Nivel1/><Footer/></>}/>
    </Routes>
  );
}

export default App;
