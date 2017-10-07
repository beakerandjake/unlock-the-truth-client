import template from './question-number.html';
import controller from './question-number.controller';
import './question-number.css';

// Component which handles displaying a questions number 

const questionNumberComponent = {
    bindings: {
        number: '@qnNumber'
    },
    template,
    controller
};

export default questionNumberComponent;