import template from './question-body.html';
import './question-body.css';

// Handles common scenario of binding a questions body html

const QuestionBodyComponent = {
  bindings: {
      body: '<qbBody'
  },
  template
};

export default QuestionBodyComponent;