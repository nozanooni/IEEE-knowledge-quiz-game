// src/components/Quiz.js

import React, { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'; //  Import for screen size
import quizData from '../data/quizData';
import Question from './Question';
import Confetti from 'react-confetti'; // Import the Confetti component
import IEEELogo from '.ieee_logo.png';


const Quiz = () => {
    // State to manage quiz flow
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showResults, setShowResults] = useState(false);
    
    //  Get screen dimensions using the hook
    const { width, height } = useWindowSize(); 

    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrectAnswer = isSubmitted && currentQuestion.answerOptions.find(opt => opt.text === selectedAnswer)?.isCorrect;

    const handleAnswerSelection = (answer) => {
        if (!isSubmitted) {
            setSelectedAnswer(answer);
        }
    };

    // INTERACTIVE FEATURE 1: Submit Answer
    const handleSubmitAnswer = () => {
        if (!selectedAnswer) return; 

        setIsSubmitted(true);
        if (currentQuestion.answerOptions.find(opt => opt.text === selectedAnswer)?.isCorrect) {
            setScore(score + 1);
        }
    };

    // INTERACTIVE FEATURE 2: Move to Next Question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setIsSubmitted(false);
        } else {
            setShowResults(true); // End of quiz
        }
    };

    if (showResults) {
        // THIS IS WHERE THE CONFETTI LOGIC GOES
        return (
            <>
                <Confetti
                    width={width}
                    height={height}
                    recycle={false} // Run the effect once
                    numberOfPieces={550}
                    // Optional: Custom colors for IEEE theme (Blue, White, and a touch of Gold)
                    colors={['#f4bee9ff', '#f3ffb6ff', '#93d1f0ff']} 
                />
                
                <div className="results-container">
                    <h2>Quiz Complete!</h2>
                    <p>You scored {score} out of {quizData.length}.</p>
                    <p>Thank you for testing your knowledge of the KAU IEEE Student Branch facts!</p>
                    <button className="primary-button" onClick={() => window.location.reload()}>
                        Restart Quiz
                    </button>
                </div>
            </> // Wrapping in a React Fragment (<>) is necessary to return multiple elements (Confetti and the results container)
        );
    }
    
    return (
        
        <div className="quiz-page-content">
            <img src={IEEELogo} alt="IEEE KAU Student Branch Logo" className="logo-header" />
            <h1 className="header-title"> IEEE Club Knowledge Quiz!</h1>
            <h2 className ="header-subtitle">Test your knowledge about the KAU IEEE Student Branch!</h2>
            <p className="score-display">Question {currentQuestionIndex + 1} of {quizData.length} | Score: {score}</p>

            <Question
                question={currentQuestion}
                options={currentQuestion.answerOptions}
                handleAnswerSelection={handleAnswerSelection}
                selectedAnswer={selectedAnswer}
                isSubmitted={isSubmitted}
                isCorrectAnswer={isCorrectAnswer}
            />

            <div className="quiz-controls">
                {!isSubmitted ? (
                    <button
                        className="primary-button"
                        onClick={handleSubmitAnswer}
                        disabled={!selectedAnswer} // Disabled until an option is selected
                    >
                        Submit Answer
                    </button>
                ) : (
                    <button
                        className="primary-button next-button"
                        onClick={handleNextQuestion}
                    >
                        {currentQuestionIndex === quizData.length - 1 ? 'Show Results' : 'Next Question'}
                    </button>
                )}
            </div>
        </div>
        
    );
};

export default Quiz;