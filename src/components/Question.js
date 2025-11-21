// src/components/Question.js
import React from 'react';

const Question = ({ question, options, handleAnswerSelection, selectedAnswer, isSubmitted, isCorrectAnswer }) => {
    return (
        <div className="question-container">
            <div className="blue-box">
            
            </div>
            
            <h3>{question.questionNumber}. {question.question}</h3>
            <div className="options-grid">
                {options.map((option, index) => (
                    <button
                        key={index}
                        // Styling classes for immediate feedback
                        className={`option-button ${selectedAnswer === option.text ? 'selected' : ''} ${isSubmitted && option.isCorrect ? 'correct' : ''} ${isSubmitted && selectedAnswer === option.text && !isCorrectAnswer ? 'incorrect' : ''}`}
                        onClick={() => handleAnswerSelection(option.text)}
                        disabled={isSubmitted} // Disable selection after submission
                    >
                        {option.text}
                    </button>
                ))}
            </div>
            
            {/* Rationale feedback - visible only after submission */}
            {isSubmitted && (
                <div className={`rationale-box ${isCorrectAnswer ? 'correct-rationale' : 'incorrect-rationale'}`}>
                    <p>
                        <strong>{isCorrectAnswer ? 'Correct! ' : 'Incorrect. '}</strong>
                        {options.find(opt => opt.isCorrect).rationale}
                    </p>
                </div>
            )}
            
            {/* Hint Box */} 
            <div className="blue-box">
            
            </div>
        </div>
        // I decided not to add a "hint" section for now to keep the interface clean
    );
};

export default Question;