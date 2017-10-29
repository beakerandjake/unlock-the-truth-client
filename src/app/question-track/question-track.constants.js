// The event that gets broadcasted when the user answers incorrectly.  
export const wrongAnswerEvent = 'utt.wrong-answer';

// The event that gets broadcasted when the user answers correctly.  
export const correctAnswerEvent = 'utt.correct-answer';

// Defines the API routes relating to the question track.
export const apiRoutes = {
    getQuestions: '/questions',
    answerQuestion: '/questions/:questionId'
};