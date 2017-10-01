import angular from 'angular';
import unansweredQuestionComponent from './unanswered-question.component';

const moduleName = 'unlock-the-truth.unanswered-question';

angular
    .module(moduleName, [])
    .component('uttUnansweredQuestion', unansweredQuestionComponent);

export default moduleName;