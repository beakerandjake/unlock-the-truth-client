import angular from 'angular';
import QuestionBody from '../../question-body/question-body.module';
import manualQuestionComponent from './manual-question.component';

// Component which contains the manual-question component

const moduleName = 'unlock-the-truth.current-question.manual';

angular
    .module(moduleName, [
        QuestionBody
    ])
    .component('uttManualQuestion', manualQuestionComponent);

export default moduleName;