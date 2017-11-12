import template from './unlocked-reveal.html';

// Component which displays when the user has unlocked all of the questions.  

const UnlockedRevealComponent = {
  bindings: {
      unlockTheTruth: '&urOnUnlock'
  },
  template
};

export default UnlockedRevealComponent;