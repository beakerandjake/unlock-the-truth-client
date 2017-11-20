import template from './click-question.html';
import controller from './click-question.controller';
import './click-question.css';

// question which can only be answered by clicking a button X number of times. 

const ClickQuestionController = {
    bindings: {
        question: '<cqQuestion',
        onSubmit: '&cqOnSubmit'
    },
    template,
    controller
};

export default ClickQuestionController;