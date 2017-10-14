import angular from 'angular';
import manualQuestionComponent from './manual-question.component';

// Component which contains the manual-question component

const moduleName = 'unlock-the-truth.current-question.manual';

angular
    .module(moduleName, [])
    .component('uttManualQuestion', manualQuestionComponent);

export default moduleName;