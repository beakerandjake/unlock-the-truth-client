import template from './the-reveal.html';
import controller from './the-reveal.controller';
import './the-reveal.css';

// Component which displays the final truth to the user.  

const TheRevealComponent = {
  bindings: {
    onUnlocked: '&trUnlocked' // callback we invoke when the truth has been unlocked
  },
  template,
  controller
};

export default TheRevealComponent;