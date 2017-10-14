import template from './locked-reveal.html';

// Component which displays the truth when it hasn't been unlocked.

const LockedRevealComponent = {
  bindings: {
    model: '<lrModel'
  },
  template
};

export default LockedRevealComponent;