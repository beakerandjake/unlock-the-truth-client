import template from './correct-answer.html';
import controller from './correct-answer.controller';

// Component which congratulates the user on a correct answer and allows them to proceed to the next answer.  

const CorrectAnswerComponent = {
  bindings: {
    close: '&caOnClose' // Callback we invoke when the user wants to move on. 
  },
  template,
  controller
};

export default CorrectAnswerComponent;