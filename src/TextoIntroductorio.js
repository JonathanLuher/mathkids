import React, { useState } from 'react';
import Avatar from './Avatar';

const TextoIntroductorio = ({ startExercise }) => {
    const [isThinking, setIsThinking] = useState(false);

    return (
        <>
            <h1 className="title has-text-centered has-text-dark">
                <br /> <br /> ¡Prepárate para resolver ejercicios matemáticos! <br /> <br />
            </h1>
            <p className="subtitle has-text-centered has-text-grey">
                En este nivel el alumno desarrollará sus competencias matemáticas:
            </p>
            <ul className="has-text-centered" style={{ listStyleType: 'none', padding: 0 }}>
                <li>🔢 Dominio de las operaciones básicas: suma, resta, multiplicación y división.</li>
                <li>🧠 Mejora en cálculo mental y rapidez numérica.</li>
                <li>🧩 Resolución de problemas prácticos y cotidianos.</li>
                <li>🎯 Fortalecimiento del razonamiento lógico y la precisión.</li>
                <br /> <br />
            </ul>
            <p className="has-text-centered has-text-grey">
                ¡Supera desafíos, gana confianza y demuestra tus habilidades!
            </p>
            <p className="has-text-centered has-text-grey">
                ¿Listo para comenzar?
            </p>

            {/* Mostrar Avatar */}
            <Avatar isThinking={isThinking} />

            <button
                className="button is-primary is-fullwidth"
                onMouseEnter={() => setIsThinking(true)} // Al acercarse el mouse, activa "pensando"
                onMouseLeave={() => setIsThinking(false)} // Al alejar el mouse, regresa a normal
                onClick={() => {
                    setIsThinking(true);  // Asegura que el cerebro siga "pensando" al presionar
                    startExercise();
                }}
            >
                Comenzar
            </button>
        </>
    );
};

export default TextoIntroductorio;
