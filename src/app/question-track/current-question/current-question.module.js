import angular from 'angular';
import currentQuestionComponent from './current-question.component';

const moduleName = 'unlock-the-truth.current-question';

angular
    .module(moduleName, [])
    .component('uttCurrentQuestion', currentQuestionComponent);

export default moduleName;