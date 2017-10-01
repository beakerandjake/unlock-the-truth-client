import angular from 'angular';
import lockedQuestionComponent from './locked-question.component';

const moduleName = 'unlock-the-truth.locked-question';

angular
    .module(moduleName, [])
    .component('uttLockedQuestion', lockedQuestionComponent);

export default moduleName;