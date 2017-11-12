import template from './error.html';
import controller from './error.controller';

// Component which informs the user that something went wrong.  

const ErrorDisplayComponent = {
    bindings: {
        error: '<ueError'
    },
    template,
    controller
};

export default ErrorDisplayComponent;