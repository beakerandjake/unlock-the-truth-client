import template from './unlocked-question.html';
import controller from './unlocked-question.controller';

const UnlockedQuestionComponent = {
  bindings: {
      question: '<'
  },
  template,
  controller
};

export default UnlockedQuestionComponent;