import template from './locked-question.html';
import controller from './locked-question.controller';

const LockedQuestionComponent = {
  bindings: {
    question: '<'
  },
  template,
  controller
};

export default LockedQuestionComponent;