import React from 'react';
import './Avatar.css';

// Asegúrate de tener las imágenes en la carpeta 'assets/images'
import brainNormal from './/images/e1.png';
import brainThinking from './/images/e2.png';

const Avatar = ({ isThinking }) => {
    return (
        <div className="avatar-container">
            {/* Alternamos entre las imágenes */}
            <img
                src={isThinking ? brainThinking : brainNormal}
                alt={isThinking ? 'Pensando' : 'Cerebro normal'}
                className="avatar-image"
            />
        </div>
    );
};

export default Avatar;