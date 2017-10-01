import angular from 'angular';
import unlockedQuestionComponent from './unlocked-question.component';

const moduleName = 'unlock-the-truth.unlocked-question';

angular
    .module(moduleName, [])
    .component('uttUnlockedQuestion', unlockedQuestionComponent);

export default moduleName;