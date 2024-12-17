import React, { useState, useEffect, useCallback } from 'react';
import './Nivel1.css';
import TextoIntroductorio from './TextoIntroductorio';

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
        } else {
            setIncorrectCount(incorrectCount + 1);
        }

        // Obtener una nueva pregunta después de la respuesta
        getNewQuestion();
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
                    {/* Se reemplaza la parte del texto introductorio con el componente y pasamos startExercise */}
                    {!isStarted && <TextoIntroductorio startExercise={startExercise} />}
                    {isStarted && (
                        <>
                            <div className="notification is-primary">
                                <strong>Correctas: {correctCount}</strong> |{' '}
                                <strong>Incorrectas: {incorrectCount}</strong>
                            </div>
                            {currentQuestion && !isFinished && (
                                <div className="card has-background-white has-shadow">
                                    <div className="card-content">
                                        <p className="subtitle">{currentQuestion.question}</p>
                                        {/* Aquí organizamos los botones en 2 columnas dentro de la card */}
                                        <div className="columns is-multiline">
                                            {currentQuestion.options.map((option, index) => (
                                                <div key={index} className="column is-6">
                                                    <button
                                                        className="button is-option is-fullwidth"
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
