import template from './current-question.html';
import controller from './current-question.controller';
import './current-question.css';

// Component which displays and allows the user to answer the current question.  

const CurrentQuestionComponent = {
  bindings: {
      question: '<cqQuestion',
      onAnswer: '&cqOnAnswered', // Callback fired when the user answers this question. 
      onContinue: '&cqOnContinue' // Callback fired when the user acknowledges the correct answer. 
  },
  template,
  controller
};

export default CurrentQuestionComponent;