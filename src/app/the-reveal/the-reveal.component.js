import template from './the-reveal.html';
import controller from './the-reveal.controller';

// Component which displays the final truth to the user.  

const TheRevealComponent = {
  bindings: {
    unlocked: 'rcUnlocked'
  },
  template,
  controller
};

export default TheRevealComponent;