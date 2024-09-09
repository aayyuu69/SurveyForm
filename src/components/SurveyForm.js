// // // src/components/SurveyForm.js
// import React, { useState } from 'react';
// import WelcomeScreen from './WelcomeScreen';
// import Question from './Question';

// const questions = [
//   { id: 1, type: 'rating', text: 'How satisfied are you with our products?', range: 5 },
//   { id: 2, type: 'rating', text: 'How fair are the prices compared to similar retailers?', range: 5 },
//   { id: 3, type: 'rating', text: 'How satisfied are you with the value for money of your purchase?', range: 5 },
//   { id: 4, type: 'rating', text: 'On a scale of 1-10 how would you recommend us to your friends and family?', range: 10 },
//   { id: 5, type: 'text', text: 'What could we do to improve our service?' }
// ];

// function SurveyForm() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [isSurveyStarted, setIsSurveyStarted] = useState(false); // Tracks whether the survey has started

//   // Handle starting the survey
//   const handleStartSurvey = () => {
//     setIsSurveyStarted(true); // Start the survey by showing the first question
//   };

//   const handleAnswer = (id, answer) => {
//     setAnswers({ ...answers, [id]: answer });
//   };

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   if (!isSurveyStarted) {
//     return <WelcomeScreen onStart={handleStartSurvey} />; // Show welcome screen if survey hasn't started
//   }

//   return (
//     <div>
//       <Question
//         question={questions[currentQuestion]}
//         onAnswer={handleAnswer}
//         currentQuestion={currentQuestion}
//         totalQuestions={questions.length}
//       />
//       <button onClick={handlePrevious} disabled={currentQuestion === 0}>
//         Previous
//       </button>
//       <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
//         Next
//       </button>
//     </div>
//   );
// }

// export default SurveyForm;
import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import Question from './Question';
import './SurveyForm.css'; 

const questions = [
  { id: 1, type: 'rating', text: 'How satisfied are you with our products?', range: 5 },
  { id: 2, type: 'rating', text: 'How fair are the prices compared to similar retailers?', range: 5 },
  { id: 3, type: 'rating', text: 'How satisfied are you with the value for money of your purchase?', range: 5 },
  { id: 4, type: 'rating', text: 'On a scale of 1-10 how would you recommend us to your friends and family?', range: 10 },
  { id: 5, type: 'text', text: 'What could we do to improve our service?' }
];

function SurveyForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSurveyStarted, setIsSurveyStarted] = useState(false); // Tracks whether the survey has started

  const handleStartSurvey = () => {
    setIsSurveyStarted(true); // Start the survey by showing the first question
  };

  const handleAnswer = (id, answer) => {
    setAnswers({ ...answers, [id]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (!isSurveyStarted) {
    return <WelcomeScreen onStart={handleStartSurvey} />;
  }

  return (
    <div className="survey-container">
      <Question
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
      />
      <button
        className="button"
        onClick={handlePrevious}
        disabled={currentQuestion === 0}
      >
        Previous
      </button>
      <button
        className="button"
        onClick={handleNext}
        disabled={currentQuestion === questions.length - 1}
      >
        Next
      </button>
    </div>
  );
}

export default SurveyForm;
