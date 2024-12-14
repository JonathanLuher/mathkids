import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './VistaAlumno.css';

function VistaAlumno() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate(); // Inicializa useNavigate

  const levels = [
    { id: 1, label: 'Nivel 1' },
    { id: 2, label: 'Nivel 2' },
    { id: 3, label: 'Nivel 3' },
    { id: 4, label: 'Nivel 4' },
    { id: 5, label: 'Nivel 5' },
  ];

  const handleSelect = (levelId) => {
    setSelectedLevel(levelId);
    navigate(`/nivel/${levelId}`); // Redirige al componente Nivel
  };

  return (
    <div className="timeline-container">
      <div className="timeline">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`timeline-item ${selectedLevel === level.id ? 'selected' : ''}`}
            onClick={() => handleSelect(level.id)} // Llama a handleSelect al hacer clic
          >
            <div className="circle"></div>
            <div className="label">{level.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VistaAlumno;
