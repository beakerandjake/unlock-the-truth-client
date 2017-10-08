import template from './correct-answer.html';
import controller from './correct-answer.controller';

// Component which congratulates the user on a correct answer and allows them to proceed to the next answer.  

const CorrectAnswerComponent = {
  bindings: {
    close: '&' // Callback we invoke to close the modal
  },
  template,
  controller
};

export default CorrectAnswerComponent;