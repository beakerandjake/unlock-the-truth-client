import template from './locked-question.html';
import controller from './locked-question.controller';
import './locked-question.css';

// Component which displays a locked question.  

const LockedQuestionComponent = {
  bindings: {
    question: '<'
  },
  template,
  controller
};

export default LockedQuestionComponent;