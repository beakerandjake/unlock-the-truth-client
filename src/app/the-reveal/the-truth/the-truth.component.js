import template from './the-truth.html';
import controller from './the-truth.controller';

// Component which reveals the truth to the user!

const TheTruthComponent = {
  bindings: {
      theTruth: '<ttTruth'
  },
  template,
  controller
};

export default TheTruthComponent;