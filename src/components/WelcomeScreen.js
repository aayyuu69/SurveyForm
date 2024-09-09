// // src/components/WelcomeScreen.js
// import React from 'react';

// const WelcomeScreen = ({ onStart }) => {
// return (
//     <div style={styles.container}>
//     <h1>Welcome to the Customer Satisfaction Survey!</h1>
//     <p>We appreciate your time to answer a few questions about our service.</p>
//     <button onClick={onStart} style={styles.button}>
//         Start Survey
//     </button>
//     </div>
// );
// };

// // Styles for the welcome screen
// const styles = {
// container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     textAlign: 'center',
// },
// button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     marginTop: '20px',
// },
// };

// export default WelcomeScreen;
import React from 'react';
import './SurveyForm.css'; // Importing the CSS for welcome screen

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1 className="welcome-title">Welcome to the Customer Satisfaction Survey!</h1>
      <p className="welcome-message">We appreciate your time to answer a few questions about our service.</p>
      <button onClick={onStart} className="button">
        Start Survey
      </button>
    </div>
  );
};

export default WelcomeScreen;
