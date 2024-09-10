// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// // Suppress the ResizeObserver loop error
// if (typeof window !== 'undefined') {
//   const resizeObserverErr = () => {
//     window.addEventListener('error', (e) => {
//       if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
//         e.stopImmediatePropagation();
//       }
//     });
//   };

//   resizeObserverErr();
// }

// // Your app rendering code
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Old ReactDOM.render (Deprecated in React 18)
// ReactDOM.render(<App />, document.getElementById('root'));

// New way to render in React 18

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

