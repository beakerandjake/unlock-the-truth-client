import angular from 'angular';
import questionNumberComponent from './question-number.component';

// Module which contains a reusable question number component.

const moduleName = 'unlock-the-truth.question-number';

angular
    .module(moduleName, [])
    .component('uttQuestionNumber', questionNumberComponent);

export default moduleName;