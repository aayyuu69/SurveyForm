export const saveAnswer = (questionId, answer) => {
    let answers = JSON.parse(localStorage.getItem('surveyAnswers')) || {};
    answers[questionId] = answer;
    localStorage.setItem('surveyAnswers', JSON.stringify(answers));
};

export const getAnswers = () => {
    return JSON.parse(localStorage.getItem('surveyAnswers')) || {};
};

export const setSurveyCompleted = () => {
    localStorage.setItem('surveyCompleted', 'COMPLETED');
};

export const getSurveyStatus = () => {
    return localStorage.getItem('surveyCompleted');
};
