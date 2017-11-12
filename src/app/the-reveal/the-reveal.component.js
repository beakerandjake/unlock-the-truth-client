import template from './the-reveal.html';
import controller from './the-reveal.controller';
import './the-reveal.css';

// Component which allows the user to unlock the truth. 

const TheRevealComponent = {
  bindings: {
    onUnlocked: '&trUnlocked' // callback we invoke when the truth has been successfully unlocked
  },
  template,
  controller
};

export default TheRevealComponent;