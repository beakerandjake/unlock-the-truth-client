import template from './login.html';
import controller from './login.controller';
import './login.css';

// Component which allows the user to log into the website.  

const LoginComponent = {
  bindings: {
    close: '&'
  },
  template,
  controller
};

export default LoginComponent;