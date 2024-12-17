import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './VistaAlumno.css';

// Imágenes de los niveles
import level1Image from './images/world1.png';
import level2Image from './images/world2.png';
import level3Image from './images/world3.png';
import level4Image from './images/world4.png';
import level5Image from './images/world5.png';

function VistaAlumno() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate(); // Inicializa useNavigate

  const levels = [
    { id: 1, label: 'Nivel 1', image: level1Image },
    { id: 2, label: 'Nivel 2', image: level2Image },
    { id: 3, label: 'Nivel 3', image: level3Image },
    { id: 4, label: 'Nivel 4', image: level4Image },
    { id: 5, label: 'Nivel 5', image: level5Image },
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
                <img
                    src={level.image}
                    alt={level.label}
                    className="level-image"
                />
                <div className="label">{level.label}</div>
              </div>
          ))}
        </div>
      </div>
  );
}

export default VistaAlumno;
