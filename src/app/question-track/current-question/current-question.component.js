import template from './current-question.html';
import controller from './current-question.controller';

const CurrentQuestionComponent = {
  bindings: {
      question: '<'
  },
  template,
  controller
};

export default CurrentQuestionComponent;