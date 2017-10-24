import template from './logout.html';
import controller from './logout.controller';

// Component which allows the user to logout. 

const LogoutComponent = {
  bindings: {
    close: '&'
  },
  template,
  controller
};

export default LogoutComponent;