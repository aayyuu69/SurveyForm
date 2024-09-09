// src/components/Question.js
import React, { useState } from 'react';

const Question = ({ question, onAnswer, currentQuestion, totalQuestions }) => {
const [answer, setAnswer] = useState('');

  // Handle change in input (either rating or text)
const handleInputChange = (event) => {
    const value = event.target.value;
    setAnswer(value);
    onAnswer(question.id, value); // Send the answer back to the parent component
};

return (
    <div>
      {/* Show the question number */}
    <h2>
        Question {currentQuestion + 1}/{totalQuestions}
    </h2>
    <p>{question.text}</p>

      {/* Display the input based on the question type */}
    {question.type === 'rating' && (
        <div>
          {/* Render rating buttons based on the range */}
        {Array.from({ length: question.range }, (_, i) => i + 1).map((value) => (
            <label key={value}>
            <input
                type="radio"
                value={value}
                checked={answer === value.toString()}
                onChange={handleInputChange}
            />
            {value}
            </label>
        ))}
        </div>
    )}

    {question.type === 'text' && (
        <textarea
        value={answer}
        onChange={handleInputChange}
        placeholder="Your response here"
        />
    )}
    </div>
);
};

export default Question;
