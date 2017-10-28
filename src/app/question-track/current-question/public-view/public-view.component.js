import template from './public-view.html';
import controller from './public-view.controller';

// Component which displays the current question to a non authenticated user. 

const PublicViewComponent = {
  bindings: {
      question: '<pvQuestion'
  },
  template,
  controller
};

export default PublicViewComponent; 