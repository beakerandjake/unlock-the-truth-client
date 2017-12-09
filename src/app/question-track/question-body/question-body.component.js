import template from './question-body.html';
import controller from './question-body.controller';

// Handles common scenario of binding a questions body html

const QuestionBodyComponent = {
  bindings: {
      body: '<qbBody'
  },
  template,
  controller
};

export default QuestionBodyComponent;