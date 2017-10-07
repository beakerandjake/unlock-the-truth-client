import template from './unlocked-question.html';
import controller from './unlocked-question.controller';

// Component which displays a previously unlocked question. 

const UnlockedQuestionComponent = {
  bindings: {
      question: '<'
  },
  template,
  controller
};

export default UnlockedQuestionComponent;