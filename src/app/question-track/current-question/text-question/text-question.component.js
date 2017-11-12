import template from './text-question.html';
import controller from './text-question.controller';

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