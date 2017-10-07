import angular from 'angular';
import textQuestionComponent from './text-question.component';

const moduleName = 'unlock-the-truth.text-question';

angular
    .module(moduleName, [])
    .component('uttTextQuestion', textQuestionComponent);

export default moduleName;