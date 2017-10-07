import angular from 'angular';
import textQuestionComponent from './text-question.component';

// Modules which contains the text-question component

const moduleName = 'unlock-the-truth.current-question.text';

angular
    .module(moduleName, [])
    .component('uttTextQuestion', textQuestionComponent);

export default moduleName;