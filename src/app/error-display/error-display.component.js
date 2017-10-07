import template from './error-display.html';
import controller from './error-display.controller';

// Component which informs the user that something went wrong.  

const ErrorDisplayComponent = {
    bindings: {
        error: '<edError'
    },
    template,
    controller
};

export default ErrorDisplayComponent;