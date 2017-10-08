import template from './text-question.html';
import controller from './text-question.controller';

// Import styles. 
import 'angular-motion';

// Component which allows the user to answer a text type question

const TextQuestionComponent = {
  bindings: {
    question: '<tqQuestion',
    onSubmit: '&tqOnSubmit'
  },
  template,
  controller
};

export default TextQuestionComponent;