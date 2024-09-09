// src/components/ThankYouScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router

const ThankYouScreen = () => {
const navigate = useNavigate();

useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to welcome screen or home
    }, 5000);

    return () => clearTimeout(timer);
}, [navigate]);

return (
    <div>
    <h1>Thank You for Your Feedback!</h1>
    <p>Your response has been submitted. You will be redirected shortly.</p>
    </div>
);
}

export default ThankYouScreen;
