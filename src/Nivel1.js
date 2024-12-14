import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Nivel1.css';

// Función para mezclar un arreglo de forma aleatoria (Fisher-Yates)
const shuffleArray = (array) => {
    let shuffledArray = [...array];  // Hacemos una copia para no mutar el original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];  // Intercambiar elementos
    }
    return shuffledArray;
};

const Nivel1 = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);  // Para almacenar preguntas respondidas
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);  // Para saber si se han mostrado todas las preguntas

    // Obtener preguntas desde el servidor
    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('http://localhost:3001/questions');
            const data = await response.json();
            setQuestions(data);
            getNewQuestion(data);
        };

        fetchQuestions();
    }, []);

    // Obtener una nueva pregunta aleatoria y mezclar las respuestas
    const getNewQuestion = (questionsList) => {
        if (answeredQuestions.length === questionsList.length) {
            setIsFinished(true);  // Si ya se han respondido todas las preguntas
            return;
        }

        let randomIndex;
        let selectedQuestion;

        // Obtener una pregunta aleatoria que no haya sido respondida
        do {
            randomIndex = Math.floor(Math.random() * questionsList.length);
            selectedQuestion = questionsList[randomIndex];
        } while (answeredQuestions.includes(selectedQuestion.id)); // Verificamos que no se haya respondido ya

        // Añadimos la pregunta a las preguntas respondidas
        setAnsweredQuestions([...answeredQuestions, selectedQuestion.id]);

        // Creamos un array con las opciones (incluyendo la correcta)
        const options = [
            selectedQuestion.option_1,
            selectedQuestion.option_2,
            selectedQuestion.option_3,
            selectedQuestion.option_4
        ];

        // Mezclamos las opciones aleatoriamente
        const shuffledOptions = shuffleArray(options);

        // Establecemos la pregunta y las opciones mezcladas
        setCurrentQuestion({
            question: selectedQuestion.question,
            correctAnswer: selectedQuestion.correctAnswer,
            options: shuffledOptions
        });
    };

    // Verificar la respuesta seleccionada
    const checkAnswer = (selectedOption) => {
        if (selectedOption === currentQuestion.correctAnswer) {
            setCorrectCount(correctCount + 1);
        } else {
            setIncorrectCount(incorrectCount + 1);
        }

        // Obtener una nueva pregunta después de la respuesta
        getNewQuestion(questions);
    };

    // Comenzar el ejercicio
    const startExercise = () => {
        setIsStarted(true);
        setAnsweredQuestions([]);  // Resetear las preguntas respondidas
        setIsFinished(false);
        setCorrectCount(0);
        setIncorrectCount(0);
    };

    return (
        <div className="container">
            <div className="card has-background-white has-shadow">
                <div className="card-content">
                    <h1 className="title has-text-centered">¡Prepárate para resolver ejercicios matemáticos!</h1>
                    {!isStarted ? (
                        <button className="button is-primary is-fullwidth" onClick={startExercise}>Comenzar</button>
                    ) : (
                        <>
                            <div className="notification is-primary">
                                <strong>Correctas: {correctCount}</strong> | <strong>Incorrectas: {incorrectCount}</strong>
                            </div>
                            {currentQuestion && !isFinished && (
                                <div className="card has-background-white has-shadow">
                                    <div className="card-content">
                                        <p className="subtitle">{currentQuestion.question}</p>
                                        <div className="buttons are-medium is-centered">
                                            {currentQuestion.options.map((option, index) => (
                                                <button
                                                    key={index}
                                                    className="button is-primary is-fullwidth"
                                                    onClick={() => checkAnswer(option)}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isFinished && (
                                <div className="notification is-success">
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
