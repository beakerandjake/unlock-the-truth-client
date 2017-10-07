import template from './current-question.html';
import controller from './current-question.controller';

// Component which displays and allows the user to answer the current question.  

const CurrentQuestionComponent = {
  bindings: {
      question: '<cqQuestion',
      onAnswer: '&cqOnAnswered' // Callback fired when the user answers this question. 
  },
  template,
  controller
};

export default CurrentQuestionComponent;