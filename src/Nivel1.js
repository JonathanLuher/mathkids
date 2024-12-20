import React, { useState, useEffect, useCallback } from 'react';
import './Nivel1.css';
import TextoIntroductorio from './TextoIntroductorio';  // Importamos el nuevo componente
import leftImage from './images/pensativo2.jpeg';
import rightImage from './images/pensativo1.png';
import correctLeftImage from './images/feliz2.jpeg';
import correctRightImage from './images/feliz1.jpeg';
import incorrectLeftImage from './images/triste2.jpeg';
import incorrectRightImage from './images/triste1.jpeg';

// Función para mezclar un arreglo de forma aleatoria (Fisher-Yates)
const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const Nivel1 = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const buttonColors = ['is-red', 'is-blue', 'is-green', 'is-yellow'];

    // Definir los estados para las imágenes
    const [leftImageSrc, setLeftImageSrc] = useState(leftImage);
    const [rightImageSrc, setRightImageSrc] = useState(rightImage);

    // Obtener preguntas desde el servidor
    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('http://localhost:3001/questions');
            const data = await response.json();
            setQuestions(data);
        };

        fetchQuestions();
    }, []);

    // Obtener una nueva pregunta aleatoria y mezclar las respuestas
    const getNewQuestion = useCallback(() => {
        if (answeredQuestions.length === questions.length) {
            setIsFinished(true);
            return;
        }

        let randomIndex;
        let selectedQuestion;

        // Obtener una pregunta aleatoria que no haya sido respondida
        do {
            randomIndex = Math.floor(Math.random() * questions.length);
            selectedQuestion = questions[randomIndex];
        } while (answeredQuestions.includes(selectedQuestion.id));

        // Añadimos la pregunta a las preguntas respondidas
        setAnsweredQuestions([...answeredQuestions, selectedQuestion.id]);

        // Creamos un array con las opciones
        const options = [
            selectedQuestion.option_1,
            selectedQuestion.option_2,
            selectedQuestion.option_3,
            selectedQuestion.option_4,
        ];

        // Mezclamos las opciones aleatoriamente
        const shuffledOptions = shuffleArray(options);

        // Establecemos la pregunta y las opciones mezcladas
        setCurrentQuestion({
            question: selectedQuestion.question,
            correctAnswer: selectedQuestion.correctAnswer,
            options: shuffledOptions,
        });
    }, [questions, answeredQuestions]);

    // Verificar la respuesta seleccionada
    const checkAnswer = (selectedOption) => {
        if (selectedOption === currentQuestion.correctAnswer) {
            setCorrectCount(correctCount + 1);
            setLeftImageSrc(correctLeftImage);
            setRightImageSrc(correctRightImage);
        } else {
            setIncorrectCount(incorrectCount + 1);
            setLeftImageSrc(incorrectLeftImage);
            setRightImageSrc(incorrectRightImage);
        }

        setTimeout(() => {
            setLeftImageSrc(leftImage);
            setRightImageSrc(rightImage);
            // Obtener una nueva pregunta después de la respuesta
            getNewQuestion();
        }, 2000);
    };

    // Comenzar el ejercicio
    const startExercise = () => {
        setIsStarted(true);
        setAnsweredQuestions([]);
        setIsFinished(false);
        setCorrectCount(0);
        setIncorrectCount(0);

        // Iniciar con la primera pregunta
        getNewQuestion();
    };

    return (
        <div className="container">
            <div className="card has-background-white has-shadow">
                <div className="card-content">
                    {!isStarted && <TextoIntroductorio startExercise={startExercise} />}
                    {isStarted && (
                        <>
                            <div className="notification is-button-level">
                                <strong>Correctas: {correctCount}</strong> |{' '}
                                <strong>Incorrectas: {incorrectCount}</strong>
                            </div>
                            {currentQuestion && !isFinished && (
                                <div className="card has-background-white has-shadow">
                                    <div className="card-content">
                                        <div className="question-container">
                                            <img 
                                                className="side-image"
                                                src={leftImageSrc}
                                                alt="Imagen izquierda" />
                                            <p className="question-text">{currentQuestion.question}</p>
                                            <img 
                                                className="side-image"
                                                src={rightImageSrc}
                                                alt="Imagen derecha" />
                                        </div>
                                        
                                        {/* Aquí organizamos los botones en 2 columnas dentro de la card */}
                                        <div className="columns is-multiline">
                                            {currentQuestion.options.map((option, index) => (
                                                <div key={index} className="column is-6">
                                                    <button
                                                        className={`button is-option is-fullwidth answer-button ${buttonColors[index % buttonColors.length]}`}
                                                        onClick={() => checkAnswer(option)}
                                                    >
                                                        {option}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isFinished && (
                                <div className="notification is-primary">
                                    ¡Has completado todos los ejercicios! <br />
                                    <strong>Resultados: </strong>
                                    Correctas: {correctCount} | Incorrectas: {incorrectCount}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nivel1;
