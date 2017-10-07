import controller from './question-number.controller';
import './question-number.css';

// Component which handles displaying a questions number 

const questionNumberComponent = {
    bindings: {
        number: '@qnNumber'
    },
    template: `<span ng-if="$ctrl.visible" class="question-number">{{$ctrl.number}}</span>`,
    controller
};

export default questionNumberComponent;