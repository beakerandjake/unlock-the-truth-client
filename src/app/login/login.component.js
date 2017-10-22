import template from './login.html';
import controller from './login.controller';
import './login.css';

const LoginComponent = {
  bindings: {
    close: '&'
  },
  template,
  controller
};

export default LoginComponent;