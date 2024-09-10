import React, { useState, useEffect } from 'react';
import './App.css';
// import ResizeObserver from 'resize-observer-polyfill';
// 
// Use ResizeObserver as usual, or it will automatically polyfill.

const Survey = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: 'How satisfied are you with our products?',
      type: 'rating',
      options: [1, 2, 3, 4, 5],
      answer: null,
    },
    {
      id: 2,
      text: 'How fair are the prices compared to similar retailers?',
      type: 'rating',
      options: [1, 2, 3, 4, 5],
      answer: null,
    },
    {
      id: 3,
      text: 'How satisfied are you with the value for money of your purchase?',
      type: 'rating',
      options: [1, 2, 3, 4, 5],
      answer: null,
    },
    {
      id: 4,
      text: 'On a scale of 1-10 how would you recommend us to your friends and family?',
      type: 'rating',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      answer: null,
    },
    {
      id: 5,
      text: 'What could we do to improve our service?',
      type: 'text',
      answer: '',
    },
  ]);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [sessionID, setSessionID] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Generate a unique session ID on component mount
  useEffect(() => {
    const newSessionID = Date.now().toString(36) + Math.random().toString(36).substring(2, 15);
    setSessionID(newSessionID);

    // Load previous answers from localStorage (if any)
    const storedAnswers = JSON.parse(localStorage.getItem('surveyAnswers'));
    if (storedAnswers) {
      setQuestions(storedAnswers);
    }
  }, []);

  // Handle answer submission and store it in local state and localStorage
  const handleAnswerChange = (questionID, answer) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionID) {
        return { ...question, answer };
      }
      return question;
    });
    setQuestions(updatedQuestions);
    localStorage.setItem('surveyAnswers', JSON.stringify(updatedQuestions)); // Store in localStorage
  };

  // Handle navigation
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  // Handle survey completion
  const handleSurveyCompletion = () => {
    localStorage.setItem('surveyCompleted', 'true'); // Mark survey as completed in localStorage
    setIsCompleted(true);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="survey-container">
      {isCompleted ? (
        <div className="thank-you-screen">
          <h2>Thank you for your time!</h2>
          <p>Your feedback is valuable to us.</p>
          {/* Redirect to welcome screen after 5 seconds */}
          <meta http-equiv="refresh" content="5;url=/welcome" />
        </div>
      ) : (
        <div className="survey-content">
          <h1>Customer Survey</h1>
          <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
          <p>{currentQuestion.text}</p>

          {/* Rating Questions */}
          {currentQuestion.type === 'rating' && (
            <div className="rating-options">
              {currentQuestion.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={option}
                    checked={currentQuestion.answer === option}
                    onChange={() => handleAnswerChange(currentQuestion.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}

          {/* Text Question */}
          {currentQuestion.type === 'text' && (
            <textarea
              value={currentQuestion.answer}
              onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
              placeholder="Type your answer here..."
            />
          )}

          {/* Navigation Buttons */}
          <div className="button-group">
            {currentQuestionIndex > 0 && (
              <button className="nav-button" onClick={handlePrevQuestion}>Previous</button>
            )}
            {currentQuestionIndex < questions.length - 1 && (
              <button className="nav-button" onClick={handleNextQuestion}>Next</button>
            )}
            {currentQuestionIndex === questions.length - 1 && (
              <button className="nav-button submit-button" onClick={handleSurveyCompletion}>Submit</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Survey;
